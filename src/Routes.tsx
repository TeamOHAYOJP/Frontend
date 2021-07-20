import { Ranking } from "pages/Ranking"
import SignIn from "pages/SignIn"
import SignUp from "pages/SignUp"
import { UserEdit } from "pages/UserEdit"
import { UserPrifile } from "pages/UserProfile"

export const Routes = {

    root        : { path: '/',                  exact: true, name: 'root',     component: Ranking     },
    welcome     : { path: '/welcome',           exact: true, name: 'welcome',  component: Ranking     },
    signIn      : { path: '/signin',            exact: true, name: 'signin',   component: SignIn      },
    signUp      : { path: '/signup',            exact: true, name: 'signup',   component: SignUp      },
    calcTest    : { path: '/calctest',          exact: true, name: 'calctest', component: Ranking     },
    userProfile : { path: '/users/:id',         exact: true, name: 'calctest', component: UserPrifile },
    userEdit    : { path: '/users/mypage/edit', exact: true, name: 'edit',     component: UserEdit    },

}