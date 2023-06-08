//Query Selectors
const habits=document.querySelectorAll('.habit-btn');
const themeBtn=document.querySelector('#theme');
const modalContainer=document.querySelector('.modal-container');
const createHabitBtn=document.querySelector('.new-habbit_add');
const newHabitTitle=document.querySelector('#title');
const icons=document.querySelector('.icon');
const addBtn=document.querySelector('#add');
const cancelBtn=document.querySelector('#cancel');

//FUNCTIONS
const storage={
    saveTheme(value){
        localStorage.setItem('habitsapp.theme', '${value}');
    },
    checkTheme(){
        return localStorage.getItem('habitsapp.theme');
    }
}

const u1={
    theme(){
        themeBtn.classList.toggle('dark');
        const root=document.querySelector(':root');
        root.classList.toggle('dark');
        themeBtn.classList.contains('dark') ? storage.saveTheme('dark'):storage.saveTheme('light');
    },
    openModal(){
        modalContainer.classList.add('active');
        modalContainer.setAttribute('aria-hidden', 'false');
        newHabitTitle.focus();
    },
    closeModal(){
        modalContainer.classList.remove('active');
        modalContainer.setAttribute('aria-hidden', 'true');
        newHabitTitle.value='';

    }
}

//EVENT Listeners

//EVENT: window load
window.addEventListener('DOMContentLoaded', () => {
    //Load Theme
    const theme=storage.checkTheme();
    if(theme === 'dark') u1.theme();
})

//EVENT: theme button
themeBtn.addEventListener('click', u1.theme);

//EVENT: add habit button
createHabitBtn.addEventListener('click', u1.openModal);

//EVENT: close modal
cancelBtn.addEventListener('click', u1.closeModal);



//Delete
habits.forEach(habit => {
    habit.addEventListener('click', ()=> {
        
        habit.classList.toggle('completed');
    })
})