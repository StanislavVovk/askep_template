import { RoutesEnum, useAppSelector } from 'common/common'
import type { ComponentType, FC } from 'react'
import { Navigate } from 'react-router-dom'

interface IPrivateRoute {
  component: ComponentType
}

export const PrivateRoute: FC<IPrivateRoute> = ({component: RouteComponent}) => {
 const user = useAppSelector(state => state.authReducer.userData)


  const isUser = Boolean(user)
  return isUser ? (
    <RouteComponent/>
    ): (
    <Navigate to={RoutesEnum.SIGN_IN}/>
  );
}
