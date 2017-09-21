import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';

  quotes = [
    {quote: 'Hello World', author: 'first console log', rating: 1},
    {'quote': 'syntax error', 'author': 'Crystal Geyser', 'rating': 2},
    {'quote': 'This quote is hard coded in the app.component.ts file', 'author': 'WebMaster', 'rating': 0}
  ]

  quote={
    quote: '',
    author: '',
    rating: 0
  }

  increaseRating(index) {
    this.quotes[index].rating ++
  }

  decreaseRating(index) {
    this.quotes[index].rating--
  }

  delete(index){
    this.quotes.splice(index, 1)
  }

  formSubmit(){
    this.quotes.push(this.quote)
    this.quote = {
      quote: '',
      author: '',
      rating: 0
    }
  }
}