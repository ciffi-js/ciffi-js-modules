export const checkExpire = (customExpire) => {
  let date;
  
  if (customExpire === false) {
    return ';';
  } else {
    if (!customExpire) {
      date = new Date();
      date.setTime(date.getTime() + (10 * 365 * 24 * 60 * 60)); // expires in 10 years
    } else {
      date = new Date(customExpire);
      date.setTime(date.getTime());
    }
    return '; expires=' + date.toGMTString();
  }
};

export default class Cookies {
  constructor(props = {}) {
    
    this.props = props;
    
    this.props.expire = checkExpire(props.expire);
  }
  
  write() {
    //scrivo cookie con le info prese da this.props
    // document.cookie = xxx
  }
  
  read() {
  
  }
  
  update() {
  
  }
  
  delete() {
  
  }
}