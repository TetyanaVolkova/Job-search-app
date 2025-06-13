import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-personal-assistant',
  imports: [BrowserModule,
            FormsModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule
  ],
  templateUrl: './personal-assistant.component.html',
  styleUrl: './personal-assistant.component.scss'
})
export class PersonalAssistantComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  userInput: string = '';
  isClosed = true;
  messages: { text: string, sender: 'user' | 'bot' }[] = [];
  constructor( private httpService: HttpService ) { }

  ngOnInit(): void {
    this.httpService.getChat().subscribe(data => {
      console.log(data);
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  async sendMessage() {
    if (!this.userInput.trim()) return;

    const message = this.userInput.trim();
    this.messages.push({ sender: 'user', text: message });
    this.userInput = '';

    const botReply = await this.getBotResponse(message);
    this.messages.push({ sender: 'bot', text: botReply });
    }

    async getBotResponse(message: string): Promise<string> {
      // Replace with your backend/API call
      return 'Hi, I am your assistant. How can I help you today?';
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.warn('Could not scroll:', err);
    }
  }

  toggleChat() {
    this.isClosed = !this.isClosed;
    console.group(this.isClosed)
  }
}
