(function  () {
'use strict';

var draggedEl,
    onDragStart,
    onDrag,
    onDragEnd,
    grabPointY,
    grabPointX;


    onDragStart = function (ev){
        var boundClientRect;
        if (ev.target.className.indexOf('bar') === -1) {
            return;
        }
            draggedEl = this;

            boundClientRect = draggedEl.getBoundingClientRect();

            grabPointY = getBoundingClientRect.top - ev.clientY;
            grabPointX = getBoundingClientRect.left - ev.clientX;
            
    };

    onDrag = function (ev) {
            if(!draggedEl) {
                return;
            }
            var posX = ev.clientX + grabPointX,
                posY = ev.clientY + grabPointY;

            draggedEl.style.transform = "translateX(" + posX + "px) translateY("  + posY + "px)";
    };

    document.addEventListener('mousemove', onDrag, false);
    document.querySelector('.sticker .bar').addEventListener('mousedown',
    onDragStart, false);
})();