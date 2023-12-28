import React from 'react'
import styles from "./popularcategories.module.css"
import Listofitems from "../Homepage/Listofitems"
const popularcategories = () => {
  return (
    <div class="container" >
        <div className={styles.heading}>
        <span class="badge badge-light" className={styles.popular}>Popular Categories</span>
        <button type="button" class="btn btn-dark"className={styles.view} >View All</button>

        </div>
        <Listofitems/>
    </div>
  )
}

export default popularcategories