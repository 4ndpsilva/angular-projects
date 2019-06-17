import { OnInit, AfterContentChecked, Injector, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { BaseModel } from '../../models/base-model';
import { BaseService } from '../../services/base-services';


export abstract class BaseFormComponent<T extends BaseModel> implements OnInit, AfterViewInit, AfterContentChecked {
  form: FormGroup;
  pageTitle: string;
  currentAction: string;
  submittingForm: boolean = false;
  serverErrorMessages: string[] = null;
  id: number;

  protected activatedRoute: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;
  protected toastr: ToastrService;

  constructor(protected injector: Injector, public model: T, protected service: BaseService<T>) {
    this.activatedRoute = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
    this.toastr = this.injector.get(ToastrService);
    this.id = 0;
  }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildForm();
    this.loadModel();
  }

  ngAfterViewInit(): void {
    this.autoFocus();
  }

  ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  submitForm(): void {
    this.submittingForm = true;

    if (this.currentAction == "new") {
      this.create();
    }
    else {
      this.update();
    }
  }

  protected abstract buildForm(): void;
  protected abstract autoFocus(): void;

  protected setCurrentAction(): void {
    this.currentAction = (this.activatedRoute.snapshot.url[0].path == "new") ? "new" : "edit";
  }

  protected loadModel(): void {
    if (this.currentAction == "new") {
      this.submittingForm = false;
      this.form.reset();
      this.autoFocus();
    }
    else if (this.currentAction == "edit") {
      this.activatedRoute.paramMap.pipe(
        switchMap(params => this.service.getById(+params.get("id")))
      )
        .subscribe((m) => {
          this.id = m.id;
          this.model = m;
          this.form.patchValue(m);
        },
          (error) => alert("Ocorreu um erro no servidor"))
    }
  }

  protected setPageTitle(): void {
    this.pageTitle = (this.currentAction == "new") ? this.creationPageTitle() : this.editingPageTitle();
  }

  protected creationPageTitle(): string {
    return "Novo";
  }

  protected editingPageTitle(): string {
    return "Alteração";
  }

  protected clearForm(): void{
    this.form.reset();
    this.autoFocus();
  }

  protected create(): void {
    const model: T = this.service.fromJson(this.form.value);
    this.service.create(model)
      .subscribe(
        model => this.actionsForSuccess(model),
        error => this.actionsForError(error)
      );
  }

  protected update(): void {
    const model: T = this.service.fromJson(this.form.value);
    model.id = this.id;
    this.service.update(model)
      .subscribe(
        model => this.actionsForSuccess(model),
        error => this.actionsForError(error)
      )
  }

  protected actionsForSuccess(model: T): void {
    this.toastr.success("Registro salvo com sucesso!");

    const baseComponentPath: string = this.activatedRoute.snapshot.parent.url[0].path;

    if (this.currentAction == "new") {
      this.loadModel();
    }
    else {
      this.router.navigateByUrl(baseComponentPath, { skipLocationChange: true });
    }
  }

  protected actionsForError(error: any): void {
    this.toastr.error("Erro ao processar sua requisição");
    this.submittingForm = false;
    this.serverErrorMessages = (error.status === 422) ? JSON.parse(error._body).errors : ["Falha na comunicação com o servidor"];
  }
}