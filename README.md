# Parcel template

Цей проект було створено за допомогою Parcel. Для знайомства та налаштування
додаткові можливості [зверніться до документації](https://uk.parceljs.org/).

## Підготовка нового проекту

1. Переконайтеся, що на комп'ютері встановлено LTS-версію Node.js.
    [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Клонуй цей репозиторій git clone https://github.com/zenya385/parcel-project-template
3. Зміни ім'я папки з `parcel-project-template` на ім'я свого проекту.
4. Створи новий порожній репозиторій на GitHub.
5. Відкрий проект у VSCode, запусти термінал та зв'яжи проект з GitHub-репозиторієм
    [за інструкцією](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Встанови залежності проекту в терміналі командою `npm install`.
7. Запусти режим розробки, виконавши команду `npm start`.
8. Перейдіть в браузері за адресою [http://localhost:1234](http://localhost:1234).
    Ця сторінка автоматично перезавантажуватиметься після збереження змін у
    файли проекту.

## Файли та папки

- Усі паршали файлів стилів повинні лежати в папці `src/sass` та імпортуватись у
   файли стилів сторінок. Наприклад, для `index.html` файл стилів називається
   `index.scss`.
- Зображення додай до папки `src/images`. Складальник оптимізує їх, але тільки
   при депло продакшн версії проекту. Все це відбувається у хмарі, щоб не
   навантажувати твій комп'ютер, тому що на слабких машинах це може зайняти багато
   часу.

## Деплой

Для налаштування деплою проекту необхідно виконати кілька додаткових кроків
з налаштування твого репозиторію. Зайди у вкладку `Settings` та в підсекції
'Actions' вибери вибери пункт 'General'.

![GitHub actions settings](./assets/actions-config-step-1.png)

Прогортай сторінку до останньої секції, в якій переконайся, що вибрані опції як
на наступному зображенні та натисніть `Save`. Без цих налаштувань у збірки буде
недостатньо прав для автоматизації процесу деплою.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн версія проекту буде автоматично збиратися та деплоїтись на GitHub
Pages, у гілку `gh-pages`, щоразу коли оновлюється гілка `main`. Наприклад,
після прямого пуша або прийнятого пул-реквесту. Для цього необхідно у файлі
`package.json` відредагувати поле `homepage` та скрипт `build`, замінивши
`your_username` та `your_repo_name` на свої, і відправити зміни на GitHub.

``json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
   "build": "parcel build src/*.html --public-url /your_repo_name/"
},
``

Далі необхідно зайти в налаштування GitHub-репозиторія (`Settings` > `Pages`) та
виставити роздачу продакшн версії файлів з папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою крайнього комміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується складання та деплой проекту.
- "Зелений колір" - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, складання або деплою сталася помилка.

Більш детальну інформацію про статус можна переглянути натиснувши на іконку, і в
вікна, що випадає, перейти за посиланням `Details`.

![Deployment status](./assets/status.png)

### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися
за адресою вказаною у відредагованій властивості `homepage`. Наприклад, ось
посилання на живу версію для цього репозиторію
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Якщо відкриється порожня сторінка, переконайтеся, що у вкладці `Console` немає помилок
пов'язаних з неправильними шляхами до CSS та JS файлів проекту (**404**). Швидше
всього у тебе неправильне значення властивості `homepage` або скрипта `build` в
файлі `package.json`.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пуша у гілку `main` GitHub-репозиторія, запускається спеціальний
    скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується та
    проходить збирання перед деплом.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
    вирушає у гілку `gh-pages`. В іншому випадку, у логу виконання
    скрипт буде вказано в чому проблема.
