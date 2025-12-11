/* I used lab 9 as a base for my code to create my blog and adjusted the content and styling to fit. I used Google AI to help me 
confirm I fulfilled the requirements for the project and I used it to help me create the travel count feature as well as the 
updateTravelCount function, the countLocations function and to add an eventlistener for switching tabs so the updated travel count 
will show. I asked Googles AI mode to check to make sure i fulfilled all the requirements by copying my code and the requirements
from canvas into the box. When it told me I didn't have a function with a return value I asked "is there a function that does use 
a return value that would make sense to add" and that is how I included that part of my project */

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

function switchTab(tabId) {
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    const activeTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
        activeContent.classList.add('active');
    }   

}

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        switchTab(tabId);
    });
    tab.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.backgroundColor = '#f0f0f0'; 
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
      tabs.forEach(tab => {
        tab.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = ''; 
            }
        });
   });
    switchTab('home');
});

function countLocations(tabId) {
    const contentArea = document.getElementById(tabId);
    const locations = contentArea ? contentArea.querySelectorAll('dl dd') : [];
    return locations.length; 
}

function updateTravelCount() {
    const count = countLocations('My Travels');
    const countElement = document.getElementById('travel-count');
    if (countElement) {
        countElement.textContent = count; // Use the value to update the UI
    }
}

document.addEventListener('DOMContentLoaded', function() {
      tabs.forEach(tab => {
        tab.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = ''; 
            }
        });
   });
    switchTab('home');
    updateTravelCount();
});