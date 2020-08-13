import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function ProfileStats() {

  const { startedProjects, finishedProjects, favourites, firstName } = useSelector(state => state.slice.user)
  const offers = useSelector(state => state.slice.offers)

  const favouritesAsObjects = []
  favourites.forEach(fav => {
    const favOffer = offers.find(offer => offer._id == fav)
    favouritesAsObjects.push(favOffer)
  })

  // function startOfMonth(dt) {
  //   return new Date(dt.getFullYear(), dt.getMonth(), 1);
  // }
  const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']

  const dateNow = new Date()
  const thisMonth = dateNow.getUTCMonth(); //months from 1-12
  const thisDay = dateNow.getUTCDate();
  const thisYear = dateNow.getUTCFullYear();

  // const startThisMonth = startOfMonth(dateNow)
  // const startMonthM1 = startOfMonth(thisYear, thisMonth, 1)
  // const startMonthM2 = startOfMonth(thisYear, thisMonth - 1, 1)
  // const startMonthM3 = startOfMonth(thisYear, thisMonth - 2, 1)

  const statsThisMonth = {
    name: months[thisMonth],
    start: new Date(thisYear, thisMonth, 1),
    year: thisYear,
    startedProjects: [],
    finishedProjects: [],
    earned: 0
  }

  const statsMonthM1 = {
    name: months[thisMonth - 1],
    start: new Date(thisYear, thisMonth - 1, 1),
    year: thisYear,
    startedProjects: [],
    finishedProjects: [],
    earned: 0
  }

  const statsMonthM2 = {
    name: months[thisMonth - 2],
    start: new Date(thisYear, thisMonth - 2, 1),
    year: thisYear,
    startedProjects: [],
    finishedProjects: [],
    earned: 0
  }

  // startedProjects.forEach(project => {
  //   if (project.finishedAt) {
  //     if (project.finishedAt >= statsThisMonth.start) {
  //       statsThisMonth.finished
  //     }

  //   }
  // })

  // console.log(yearNow, monthNow, dayNow)
  // const dt = new Date();
  // console.log(startOfMonth(dt).toString());

  return (
    <>
      <p>{firstName}, твои последние результаты:</p>
      {/* {{ thisYear }, { thisMonth }, { thisDay }, { startThisMonth.toString() }} */}

      {/* <p>{startMonthM1.toString()}</p>
      <p>{startMonthM2.toString()}</p>
      <p>{startMonthM3.toString()}</p> */}

      <table>
        <tr>
          <td>Начато</td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td>Завершено</td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td>Заработок</td><td></td><td></td><td></td>
        </tr>

        <tr>
          <td></td><td>{}</td>{months[thisMonth - 2]}<td>{months[thisMonth - 1]}</td><td>{months[thisMonth]}</td>
        </tr>
      </table>
    </>
  )
}