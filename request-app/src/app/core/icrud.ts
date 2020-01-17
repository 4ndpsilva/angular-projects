import { Observable } from 'rxjs'

export interface Icrud<T> {
    get(id: string): Observable<T>;
    list(): Observable<T[]>;
    saveOrUpdate(item: T): Promise<T>;
    delete(id: string): Promise<void>;
}