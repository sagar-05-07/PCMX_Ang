import { Injectable } from '@angular/core'
import { Chat } from './chat.model';

let date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hour = date.getHours(),
    minute = date.getMinutes();



let chats = [
    new Chat(
        'assets/img/profile/ashley.jpg',
        'Ashley Ahlberg',
        'Online',
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
        new Date(year, month, day - 2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/bruno.jpg',
        'Bruno Vespa',
        'Do not disturb',
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
        new Date(year, month, day - 2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/julia.jpg',
        'Julia Aniston',
        'Away',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day - 2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/adam.jpg',
        'Adam Sandler',
        'Online',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day - 2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/tereza.jpg',
        'Tereza Stiles',
        'Offline',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day - 2, hour, minute),
        false
    ),
    new Chat(
        'assets/img/profile/michael.jpg',
        'Michael Blair',
        'Online',
        'Great, then I\'ll definitely buy this theme. Thanks!',
        new Date(year, month, day - 2, hour, minute),
        false
    )
]

let talks = [
    new Chat(
        'assets/img/profile/ashley.jpg',
        'Ashley Ahlberg',
        'Online',
        'Hi, Welcome to PCMX, How may i help you ?',
        new Date(year, month, day - 2, hour, minute + 3),
        false
    ),
    new Chat(
        'assets/img/users/user.jpg',
        'Emilio Verdines',
        'Online',
        'Hi, It is a long established fact that a reader will be distracted by the readable content of a page',
        new Date(year, month, day - 2, hour, minute + 2),
        true
    )
]

@Injectable()
export class ChatService {

    public getChats(): Array<Chat> {
        return chats;
    }

    public getTalk(): Array<Chat> {
        return talks;
    }

}

