//On va import la fonction all de saga - elle joue le rôle de combineReducers par analogie aux rootreducer
//Ici ce sera notre saga principal,  notre "root" saga comme dans la logique des reducers
import { all } from 'redux-saga/effects'
//Et ici comme pour les reducers on import nos fonctions saga qu'on créera
import weatherSaga from './weatherSaga'


//le * devant une fonction permet de faire de cette fonction, une fonction génératrice
//ce qui signifie qu'à l'intérieur de notre fonction les instructions commencant 
//par le mot clé yield seront prioritaires
//Un peut comme dans la logique du async await
//On attend que l'intruction avec le yield s'execute jusqu'à son terme pour passer à la prochaine instruction
export default function* rootSaga() {
  yield all([
    weatherSaga()
  ])
}
