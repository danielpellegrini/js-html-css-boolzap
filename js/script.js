// let date = new Date().toLocaleString();
var app = new Vue({
  el: '#app',
  data: {
    chatIndex: 0,
    search: '',
    newMessage: '',
    newMessageArray: [],
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ]
  },

  methods: {
    clickedChat: function(index) {
      this.chatIndex = index;
    },
    addNewMessage: function() {
      let date = new Date().toLocaleString();
      const newSent = {
        date: date,
        text: this.newMessage,
        status: 'sent'
      };
      console.log(newSent);
      if (this.newMessage.length > 0) {
        this.contacts[this.chatIndex].messages.push(newSent);
        this.newMessageArray.push(this.newMessage);
        this.newMessage = '';
        setTimeout(() => {
          let date = new Date().toLocaleString();

          function answerTxt() {
            return 'ok'
          };
          const newAnswer = {
            date: date,
            text: answerTxt(),
            status: 'received'
          };
          console.log(newAnswer);
          this.contacts[this.chatIndex].messages.push(newAnswer);
          this.newMessageArray.push(this.newAnswer);
        }, 1000)
      };
    },
    contactLastSeen: function(index) {
      const messages = this.contacts[index].messages;
      const lastIndex = messages.length - 1;
      const lastDate = messages[lastIndex].date;
      return lastDate;
    },
    filterContact: function() {
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
  }
});

Vue.config.devtools = true;
