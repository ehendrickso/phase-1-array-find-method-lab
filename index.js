function superbowlWin(record) {
    //return record.find(result ==="W"));
    let football =  record.find(element => element.result === "W")
   console.log(football)
    if (football) {
       return football.year
   }
   else return football

   }

   