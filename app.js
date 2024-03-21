class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(newIsCheckedOut) {
      this._isCheckedOut = newIsCheckedOut;
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
  
    }
    getAverageRating() {
      let SumRatings = this.ratings.reduce((currentSum, ratings) => currentSum + ratings);
      console.log(SumRatings)
      const lengthOfArray = this.ratings.length;
      let average = SumRatings/lengthOfArray;
      return average;
    }
    addRatings(average) {
      this.ratings.push(average);
    }
    
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title)
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title) 
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRatings(4);
  historyOfEverything.addRatings(5);
  historyOfEverything.addRatings(4);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRatings(1);
  speed.addRatings(1);
  speed.addRatings(5);
  
  console.log(speed.getAverageRating());
  /*
  const myObject = new Media("some_title")
  
  myObject.addRatings(1)
  myObject.addRatings(2)
  myObject.addRatings(3)
  
  console.log(myObject.getAverageRating()) */