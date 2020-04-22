import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/v1/products",
  responseType: "json",
//   headers: { 'authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjI2NDZhMjk2LTBkNjgtNDdlZi04NGIwLWJmYTJmMzQ2NDY3MSIsImlhdCI6MTU4NzQ4ODg2M30.I2ENCCVqfPlDAwnrnx9FIAyw-r1Woui34FDyM3XrKPM' },

});