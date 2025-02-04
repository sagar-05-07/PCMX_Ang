import { Component, ViewChild, HostListener } from '@angular/core';
import { FileUploadComponent } from 'src/app/shared/file-upload/file-upload.component';
import { Chat } from '../../refferral-dashboard/referral-notes/chat.model';
import { ChatService } from '../../refferral-dashboard/referral-notes/chart.service';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material/dialog';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-visit-notes',
  templateUrl: './visit-notes.component.html',
  styleUrl: './visit-notes.component.scss',
  providers: [ChatService]
})
export class VisitNotesComponent {

  @ViewChild('sidenav') sidenav: any;
  public settings: Settings;
  public userImage = 'assets/img/users/user.jpg';
  public chats: Array<Chat>;
  public talks: Array<Chat>;
  public sidenavOpen: boolean = true;
  public currentChat: Chat;
  public newMessage: string;
  button1Active: boolean = false;
  button2Active: boolean = false;
  button3Active: boolean = false;
  button4Active: boolean = false;
  button5Active: boolean = false;
  taskResolved: boolean = false;
  toggleButton(buttonNumber: number) {
    switch (buttonNumber) {
      case 1:
        this.button1Active = !this.button1Active;
        break;
      case 2:
        this.button2Active = !this.button2Active;
        break;
      case 3:
        this.button3Active = !this.button3Active;
        break;
      case 4:
        this.button4Active = !this.button4Active;
        break;
      case 5:
        this.button5Active = !this.button5Active;
        break;
      default:
        break;
    }
  }
  constructor(
    public dialog: MatDialog,
    public appSettings: AppSettings,
    private chatService: ChatService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.chats = this.chatService.getChats();

    // Select the first chat by default
    if (this.chats.length > 0) {
      this.currentChat = this.chats[0];
      this.getChat(this.currentChat); // Optionally trigger getChat method for initial chat
    }

    if (window.innerWidth <= 768) {
      this.sidenavOpen = false;
    }
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth <= 768) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  public getChat(obj: any) {
    if (this.talks) {
      this.talks.length = 2;
    }
    this.talks = this.chatService.getTalk();
    this.talks.push(obj);
    this.currentChat = obj;
    this.talks.forEach(talk => {
      if (!talk.my) {
        talk.image = obj.image;
      }
    });
    if (window.innerWidth <= 768) {
      this.sidenav.close();
    }
  }

  public sendMessage($event: any) {
    if (($event.which === 1 || $event.which === 13) && this.newMessage.trim() != '') {
      if (this.talks) {
        this.talks.push(
          new Chat(
            'assets/img/users/user.jpg',
            'Emilio Verdines',
            'online',
            this.newMessage,
            new Date(),
            true)
        )
        this.newMessage = '';
        let chatContainer = document.querySelector('.chat-content');
        if (chatContainer) {
          setTimeout(() => {
            var nodes = chatContainer!.querySelectorAll('.mat-mdc-list-item');
            let newChatTextHeight = nodes[nodes.length - 1];
            chatContainer!.scrollTop = chatContainer!.scrollHeight + newChatTextHeight.clientHeight;
          });
        }
      }
    }
  }
  openfileupload(id: any) {
    console.log("jkhksbdjk");
    let dialogRef = this.dialog.open(FileUploadComponent, {
      data: id,
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  public ngOnDestroy() {
    if (this.talks)
      this.talks.length = 2;
  }

  

  chatMessages: any[] = [

    {
      date: new Date(),
      postedBy: 'Admin',
      message: 'Hi, It is a long established fact that a reader will be distracted by the readable content of a page',
      context: 'System Message',
      tags: ['emergency','expedite']
    },
    {
      date: new Date(),
      postedBy: 'User',
      message: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
      context: 'General Chat',
      tags: ['emergency','Deleyed']
    },

    
  
  ];
  message: string = '';
  selectedTags: string[] = [];
  displayedColumns: string[] = ['date', 'postedBy', 'message', 'context', 'tags'];

  addMessage() {
    if (!this.message.trim()) return;
  
    const newMessage = {
      date: new Date(),
      postedBy: 'User',
      message: this.message,
      context: 'Chat Context',
      tags: [...this.selectedTags] 
    };
  
    this.chatMessages = [...this.chatMessages, newMessage];
    this.message = '';  
    this.selectedTags = [];
  }


}