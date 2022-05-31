// let date = new Date().toLocaleString();
var app = new Vue({
  el: '#app',
  data: {
    chatIndex: 0,
    search: '',
    newMessage: '',
    hide: false,
    active: false,
    newMessageArray: [],
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30',
            text: 'Did you take the dog for a walk?',
            status: 'sent',
            toggle: 'hidden'
          },
          {
            date: '10/01/2020 15:50',
            text: 'Don\' forget to feed it!',
            status: 'sent',
            toggle: 'hidden'
          },
          {
            date: '10/01/2020 16:15',
            text: 'All done!',
            status: 'received',
            toggle: 'hidden'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
            date: '20/03/2020 16:30',
            text: 'Ciao come stai?',
            status: 'sent',
            toggle: 'hidden'
          },
          {
            date: '20/03/2020 16:30',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
            toggle: 'hidden'
          },
          {
            date: '20/03/2020 16:35',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
            toggle: 'hidden'
          }
        ],
      },
      {
        name: 'Max',
        avatar: '_3',
        visible: true,
        messages: [{
            date: '28/03/2020 10:10',
            text: 'Hey Daniel, wie war denn der Urlaub?',
            status: 'received',
            toggle: 'hidden'
          },
          {
            date: '28/03/2020 10:20',
            text: 'Gräßlich! Im Hotel hatte ich Zimmernummer hundert. Und vom Türschild ist die Eins abgefallen!',
            status: 'sent',
            toggle: 'hidden'
          }
        ],
      },
      {
        name: 'Marco',
        avatar: '_4',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent',
            toggle: 'hidden'
          },
          {
            date: '10/01/2020 15:50',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received',
            toggle: 'hidden'
          }
        ],
      },
      {
        name: 'Pippo',
        avatar: '_5',
        visible: true,
        messages: [{
            date: '10/04/2021 15:30',
            text: 'Hai visto il nuovo film della Marvel?',
            status: 'sent',
            toggle: 'hidden'
          },
          {
            date: '10/04/2021 15:50',
            text: 'No! Quando è uscito?!',
            status: 'received',
            toggle: 'hidden'
          }
        ],
      },
      {
        name: 'Erika',
        avatar: '_6',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30',
            text: 'Kann ein Känguru höher als ein Haus springen?',
            status: 'sent',
            toggle: 'hidden'
          },
          {
            date: '10/01/2020 15:50',
            text: 'Ja! Weil ein Haus nicht springen kann.',
            status: 'received',
            toggle: 'hidden'
          }
        ],
      },
      {
        name: 'Gigi',
        avatar: '_7',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30',
            text: 'Was machst du?',
            status: 'sent',
            toggle: 'hidden'
          },
          {
            date: '10/01/2020 15:35',
            text: 'Ich lerne Italienisch!',
            status: 'received',
            toggle: 'hidden'
          },
          {
            date: '10/01/2020 15:36',
            text: 'und du?',
            status: 'received',
            toggle: 'hidden'
          },
          {
            date: '10/01/2020 16:50',
            text: 'Oh, schön für dich!',
            status: 'sent',
            toggle: 'hidden'
          },
          {
            date: '10/01/2020 16:51',
            text: 'Io sto mangiando un panino :)',
            status: 'sent',
            toggle: 'hidden'
          }
        ],
      },
    ]
  },

  methods: {
    clickedChat(index) {
      this.chatIndex = index;
    },
    addNewMessage() {
      let date = new Date().toLocaleString();
      const newSent = {
        date: date,
        text: this.newMessage,
        status: 'sent',
        toggle: 'hidden'
      };
      console.log(newSent);
      if (this.newMessage.length > 0) {
        this.contacts[this.chatIndex].messages.push(newSent);
        this.newMessageArray.push(this.newMessage);
        this.newMessage = '';
        setTimeout(() => {
          let date = new Date().toLocaleString();

          function answerTxt() {
            return 'Ok'
          };
          const newAnswer = {
            date: date,
            text: answerTxt(),
            status: 'received',
            toggle: 'hidden'
          };
          console.log(newAnswer);
          this.contacts[this.chatIndex].messages.push(newAnswer);
          this.newMessageArray.push(this.newAnswer);
        }, 1000)
      };
    },
    contactLastSeen(index) {
      const messages = this.contacts[index].messages;
      const lastIndex = messages.length - 1;
      const lastDate = messages[lastIndex].date;
      return lastDate;
    },
    filterContact() {
      if (this.search !== '') {
        this.contacts.forEach(item => {
          // lowercase
          const name = item.name.toLowerCase()
          const searchString = this.search.toLowerCase()
          // if contact's name starts with its first letter than display it
          if (name.startsWith(searchString)) {
            item.visible = true;
          } else { // otherwise hide it and hide the whole others contacts
            item.visible = false;
          }
        });

      } else {
        this.contacts.forEach(item => { //deleting the name from the search bar
          item.visible = true;          //the whole contacts will appear again
        });
      }
    },
    lastMessage(index) {
      const messages = this.contacts[index].messages;
      const lastIndex = messages.length - 1;
      const lastDate = messages[lastIndex].text;
      return lastDate;
    },
    toggleDropdown(index){
      const user = this.contacts[this.chatIndex].messages[index];
      ( user.toggle == 'hidden' ) ? user.toggle = 'active' : user.toggle = 'hidden';

    },
    toggleUsers() {
      this.hide = !this.hide;
    },
    deleteMessage(index){
      const message = this.contacts[this.chatIndex].messages;
      message.splice(index, 1);
    }
  }
});

Vue.config.devtools = true;
