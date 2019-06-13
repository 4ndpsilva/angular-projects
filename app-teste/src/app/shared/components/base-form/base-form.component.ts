import { OnInit, AfterContentChecked, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { BaseModel } from '../../models/base-model';
import { BaseService } from '../../services/base-services';


export abstract class BaseFormComponent<T extends BaseModel> implements OnInit, AfterContentChecked {
  form: FormGroup;
  currentAction: string;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;
  
  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;
  protected toastr: ToastrService;

  constructor(
	  protected injector: Injector,
	  public model: T,
    protected service: BaseService<T>,
    protected jsonToModelFunction: (jsonData) => T) { 

      this.route = this.injector.get(ActivatedRoute);
      this.router = this.injector.get(Router);
      this.formBuilder = this.injector.get(FormBuilder);
      this.toastr = this.injector.get(ToastrService);
  }

  ngOnInit(): void{
    this.setCurrentAction();
    this.buildForm();
    this.loadModel();
  }

  ngAfterContentChecked(){
    this.setPageTitle();
  }

  submitForm(){
    this.submittingForm = true;

    if(this.currentAction == "new"){
      this.create();
    }
    else{
      this.update();
    }
  }

  protected abstract buildForm(): void;

  protected setCurrentAction(): void{
    this.currentAction = (this.route.snapshot.url[0].path == "new")? "new": "edit";
  }

  protected loadModel(){
    if(this.currentAction == "new"){
      this.model = <T>{};
    }
    else if(this.currentAction == "edit"){
      this.route.paramMap.pipe(
        switchMap(params => this.service.getById(+params.get("id")))
      )
      .subscribe((m) => { 
          this.model = m;
          this.form.patchValue(m);
        },
        (error) => alert("Ocorreu um erro no servidor"))
    }
  }

  protected setPageTitle(){
    this.pageTitle = (this.currentAction == "new")? this.creationPageTitle(): this.editingPageTitle();
  }

  protected creationPageTitle(): string{
    return "Novo";
  }

  protected editingPageTitle(): string{
    return "Alteração";
  }

  protected create(): void{
    const model: T = this.jsonToModelFunction(this.form.value);
    this.service.create(model)
      .subscribe(
        model => this.actionsForSuccess(model),
        error => this.actionsForError(error)
      );
  }

  protected update(): void{
    const model: T = this.jsonToModelFunction(this.form.value);
    this.service.update(model)
      .subscribe(
        model => this.actionsForSuccess(model),
        error => this.actionsForError(error)
      )
  }

  protected actionsForSuccess(model: T){
    this.toastr.success("Registro salvo com sucesso!");
    
    const baseComponentPath: string = this.route.snapshot.parent.url[0].path;
   
    if(this.currentAction == "new"){
      this.loadModel();
      this.router.navigateByUrl(baseComponentPath+'/new', {skipLocationChange: true});
    }
    else{
      this.router.navigateByUrl(baseComponentPath, {skipLocationChange: true});
    }

    /*
    this.router.navigateByUrl(baseComponentPath, {skipLocationChange: true})
          .then(() => this.router.navigate([baseComponentPath, model.id, "edit"])); 
          */
  }

  protected actionsForError(error: any){
    this.toastr.error("Erro ao processar sua requisição");
    this.submittingForm = false;
    this.serverErrorMessages = (error.status === 422)? JSON.parse(error._body).errors: ["Falha na comunicação com o servidor"];
  }
}