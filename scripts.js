document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay",
    },
    editable: true,
    events: [
      {
        title: "Viagem de João",
        start: "2024-01-10",
        end: "2024-01-15",
        description: "Viagem de João",
      },
      {
        title: "Aniversário de Maria",
        start: "2024-02-05",
        description: "Aniversário de Maria",
      },
      // Adicione mais eventos conforme necessário
    ],
    dayClick: function (info) {
      var eventTitle = prompt("Adicionar evento:");
      if (eventTitle) {
        calendar.addEvent({
          title: eventTitle,
          start: info.date,
          allDay: true,
        });
      }
    },
    eventClick: function (info) {
      var eventDescription = prompt("Editar evento:", info.event.title);
      if (eventDescription !== null) {
        info.event.setProp("title", eventDescription);
      }
    },
  });

  calendar.render();
});
