import type { ComponentType, FC } from 'react'

import { RoutesEnum, useAppSelector } from 'common/common'
import { Navigate } from 'react-router-dom'

interface IPrivateRoute {
  component:  ComponentType<any> | FC<any>
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const PrivateRoute: FC<IPrivateRoute> =  ({
  component: RouteComponent
}) => {
  // const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.authReducer.userData)
  const isUser = Boolean(user)
  return isUser ? <RouteComponent /> : <Navigate to={RoutesEnum.SIGN_IN} />
}
