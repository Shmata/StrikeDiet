      var healthLable = readline(); 
      var r = 0 , g = 0 , y = 0 ;

      for( let i = 0 ; i <= 4 ; i++){
        if(healthLable[i] === 'r' || healthLable[i] === 'R'){
            r++;
        }else if(healthLable[i] === 'y' || healthLable[i] === 'Y'){
            y++;
        }else if(healthLable[i] === 'g' || healthLable[i] === 'G'){
            g++;
        }
      }

      if((r >= 3) || (r >= 2 && y >= 2) || (y ==4 && r==1) || (r == healthLable.length) || (y == healthLable.length) ) {
        console.log("nakhor lite");
      }else{
        console.log("rahat baash");
      }