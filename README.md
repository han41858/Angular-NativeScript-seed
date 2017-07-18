# Angular-NativeScript-seed
![logo](https://github.com/han41858/Angular-NativeScript-seed/blob/master/images/logo.png)

Angular와 NativeScript를 사용해서 웹과 네이티브 앱을 동시에 개발하는 프로젝트입니다.
 
Angular CLI를 사용해서 프로젝트 기본 틀을 생성하고,
src/client/common에 컴포넌트의 클래스 코드를 작성한 후에,
Angular 컴포넌트는 src/client/ng에서, NativeScript 컴포넌트는 src/client/ns에서
기본 컴포넌트 클래스를 상속받아 구현합니다.

템플릿은 따로 정의하지만 컴포넌트 클래스는 재사용할 수 있게 만들었습니다. 각 플랫폼에 특화된 기능을 사용하지 않는다면, 컴포넌트 클래스 코드를 그대로 사용할 수 있습니다.

설정 코드를 제외한 애플리케이션 코드는 TypeScript를 사용합니다. 

## 기준 버전
- @angular : 4.1.3
- @angular/cli : 1.2.0
- nativescript : 3.1.1
- nativescript-angular : 3.1.1
- TypeScript : 2.4.1

#### - 주의
- nativescript-angular@3.1.1을 사용하면 @angular@4.2.5를 사용했을 때 제대로 동작하지 않습니다.
이후에 nativescript-angular 버전이 올라가면 해결된 것으로 보입니다.
- TypeScript@2.4.1를 사용하면 다음과 같은 에러가 표시되며 빌드가 되지 않습니다.
 ```
 ERROR in D:/Workspace/Angular-NativeScript-seed/node_modules/rxjs/Subject.d.ts (16,22): Class 'Subject<T>' incorrectly extends base class 'Observable<T>'.
   Types of property 'lift' are incompatible.
     Type '<R>(operator: Operator<T, R>) => Observable<T>' is not assignable to type '<R>(operator: Operator<T, R>) => Observable<R>'.
       Type 'Observable<T>' is not assignable to type 'Observable<R>'.
         Type 'T' is not assignable to type 'R'.
 ```
 이 문제를 해결하려면 tsconfig.json에 `"skipLibCheck" : true` 옵션을 추가하면 됩니다. 

## 스크립트 사용 방법

### 웹 (Angular)
![logo](https://github.com/han41858/Angular-NativeScript-seed/blob/master/images/web.png)

웹은 Angular CLI로 생성했기 때문에 ng 명령을 그대로 랩핑해서 제공합니다.

- `start:web` : 프론트엔드 Angular 애플리케이션 실행 (ng serve)
- `build:web` : (ng build)
- `watch:web` : 프론트엔드 Angular 애플리케이션을 express static 폴더로 지정하고 워치 모드로 동작 (ng build --watch)
- `test:web` : (ng test)
- `lint:web` : (ng lint)

### 서버 (Express)
![logo](https://github.com/han41858/Angular-NativeScript-seed/blob/master/images/express.png)

웹 서버는 Express를 사용하며, Node.js 환경으로 동작합니다.
 
- `start:server` : Express 서버 실행 

### 네이티브 앱 (NativeScript)
![logo](https://github.com/han41858/Angular-NativeScript-seed/blob/master/images/android.png)

네이티브 앱은 NativeScript로 구현하며, 안드로이드만 동작 확인했습니다.
에뮬레이터를 실행하기 위해 Android Studio와 Java JDK를 설치해야 합니다.

- `prepare:android` : 플랫폼 타겟에 안드로이드를 추가
- `copyNativeScriptSrc` : `src/client/ns`에 있는 NativeScript 코드를 내부 NativeScript 프로젝트 폴더로 복사
- `clean:android` : 플랫폼 타겟에 안드로이드를 제거하고 다시 추가. 라이브러리에 오류가 발생했을 때 사용
- `run:android` : 안드로이드 에뮬레이터를 실행하는 스크립트. nodemon을 사용하기 위해 `start:android`에 통합하지 않고 별개로 분리
- `start:android` : nodemon을 사용해서 안드로이드 에뮬레이터 실행, `rs` 명령으로 바로 재시작 가능
- `build:android` : 안드로이드 .apk 파일을 빌드해서 dist/android/build.apk 파일로 복사
