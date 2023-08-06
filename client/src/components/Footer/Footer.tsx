import style from './footer.module.css'

export const Footer = () => {
  return (
    <div
      className={`w-100% d-flex align-content-center justify-content-center ${style.Footer}`}>
      <span className={'mb-2 mt-2 text-light fs-5 fw-semibold text-wrap'}>
        Created by Victor Artysh and Stanislav Siuris
      </span>
    </div>
  )
}
