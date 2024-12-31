import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  /**1º pegar o toke, e caso não haja por um null */
  const token = localStorage.getItem('token') ?? '';
  /**2º Clonar Request  q é imutável, e fornecer um objeto para ser motificado */
  request = request.clone({
    setHeaders: {
      /**É o que a API RealWord Pede Ex: Authorization: Token jwt.token.here  */
      Authorization: token ? `Token ${token}` : '',
    },
  });
  /**Retornar o Next com o clone , */
  return next(request);
};
