const calculatetemperature = () => {
    const numbertemp = document.getElementById('inputvalue').value;
    const temp_select = document.getElementById('tounit');
    const valuetemp = temp_select.value;
  
    let result;
  
    const Kel = (Kel) => {
      let Celcius = Math.round(Kel - 273.15);
      let Fahrenheit = Math.round(1.8 * (Kel - 273) + 32);
      return [Celcius, Fahrenheit];
    };
  
    const Cel = (Cel) => {
      let Kelvin = Math.round(parseFloat(Cel) + 273.15);
      let Fahrenheit = Math.round((parseFloat(Cel) * 9 / 5) + 32);
      return [Kelvin, Fahrenheit];
    };
  
    const Fah = (Fah) => {
      let Kelvin = Math.round(5 / 9 * (Fah - 32) + 273.15);
      let Celcius = Math.round((Fah - 32) / 1.8);
      return [Celcius, Kelvin];
    };
  
    if (valuetemp == 'Kel') {
      result = Kel(numbertemp);
      document.getElementById('resultcontainer').innerHTML = `= ${result[0]} °Celsius ,   = ${result[1]} °Fahrenheit`;
    } else if (valuetemp == 'Cel') {
      result = Cel(numbertemp);
      document.getElementById('resultcontainer').innerHTML = `= ${result[0]} °Kelvin ,   = ${result[1]} °Fahrenheit`;
    } else {
      result = Fah(numbertemp);
      document.getElementById('resultcontainer').innerHTML = `= ${result[0]} °Celsius ,   = ${result[1]} °Kelvin`;
    }   
  };
  
  
  
  
  
  