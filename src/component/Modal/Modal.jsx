import './Modal.css';

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal__box">
        <span></span> Пример SPA-приложения. Используется API TheMealDB для контента карточек. Главный экран содержит категории продуктов с поиском, после перехода по которым выдаёт рецепты с соответствующими продуктами. В проекте используется библиотека React, функциональные компоненты, асинхронные запросы, хуки, React Router.
        <div className="modal__close" onClick={props.toggle}>x</div>
      </div>
    </div>
  )
}

export {Modal};