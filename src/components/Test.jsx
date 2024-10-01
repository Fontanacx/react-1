import { useState, useEffect } from "react";
import {getDocs, collection, query, where, doc, updateDoc} from 'firebase/firestore'

import { db } from "../services/config"

const Test = () => {
  return (
    <div>Test</div>
  )
}

export default Test