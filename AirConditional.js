

class AirConditioner {
    constructor() {
        this.acIsOn = false;
        this.desiredTemperature = 16; 
    }

    
    getAcOn() {
        return this.isOn = true;
        
    }

    
    getAcOff() {
        return this.isOn = false;
       
    }
    setAcOn(acOn){
        this.ac_is_on = acOn;

    }
    setAcOff(acOff){
        this.ac_is_off = acOff;
    }
    setAcTemp(acTemp){
        if(this.acIsOn && acTemp >= 16 && acTemp <= 30){
            this.acIsOn = acTemp;
        }
    }
    
}

