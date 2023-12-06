// script.js



document.addEventListener('DOMContentLoaded', function () {
    // Initialize FullCalendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'CSKA Sofia vs Levski Sofia',
                start: '2023-11-15',
                end: '2023-11-15',
                description: 'Detailed information about the event.'
            },
            // Add more match events as needed
        ],
        eventRender: function (info) {
            $(info.el).tooltip({
                title: info.event.extendedProps.description,
                placement: 'top',
                trigger: 'hover',
                container: 'body'
            });
        }
    });
    calendar.render();
});

