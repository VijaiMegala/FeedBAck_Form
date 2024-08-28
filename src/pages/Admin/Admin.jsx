import { Header } from '../../components/Header/Header'
import { MainContainer } from '../../components/MainContainer/MainContainer'
import AdminStyles from '../../styles/admin.module.scss'

export const Admin = () => {
  return (
    <div className={AdminStyles.adminContainer}>
      <Header/>
      <MainContainer/>
    </div>
  )
}
