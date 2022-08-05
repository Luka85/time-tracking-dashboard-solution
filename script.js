
const dailyLink = document.querySelector(".user-card__link--daily");
const weeklyLink = document.querySelector(".user-card__link--weekly");
const monthlyLink = document.querySelector(".user-card__link--monthly");

const card = document.querySelector("card__hours");
const work = document.querySelector(".card__hours--work");
const play = document.querySelector(".card__hours--play");
const study = document.querySelector(".card__hours--study");
const exercise = document.querySelector(".card__hours--exercise");
const social = document.querySelector(".card__hours--social");
const selfcare = document.querySelector(".card__hours--selfcare");

const previousWork = document.querySelector(".card__text--work");
const previousPlay = document.querySelector(".card__text--play");
const previousStudy = document.querySelector(".card__text--study");
const previousExercise = document.querySelector(".card__text--exercise");
const previousSocial = document.querySelector(".card__text--social");
const previousSelfcare = document.querySelector(".card__text--selfcare");



dailyLink.style.color = "#fff";
const getDailyReport = async () => {
    dailyLink.style.color = "#fff";
    let resDaily = await getDataDaily(0);
    work.textContent = `${resDaily}hrs`;
    resDaily = await getDataDaily(1);
    play.textContent = `${resDaily}hrs`;
    resDaily = await getDataDaily(2);
    study.textContent = `${resDaily}hrs`;
    resDaily = await getDataDaily(3);
    exercise.textContent = `${resDaily}hrs`;
    resDaily = await getDataDaily(4);
    social.textContent = `${resDaily}hrs`;
    resDaily = await getDataDaily(5);
    selfcare.textContent = `${resDaily}hrs`;

    resDaily = await getDataDailyPrevious(0);
    previousWork.textContent = `Last day - ${resDaily}hrs`;
    resDaily = await getDataDailyPrevious(1);
    previousPlay.textContent = `Last day - ${resDaily}hrs`;
    resDaily = await getDataDailyPrevious(2);
    previousStudy.textContent = `Last day - ${resDaily}hrs`;
    resDaily = await getDataDailyPrevious(3);
    previousExercise.textContent = `Last day - ${resDaily}hrs`;
    resDaily = await getDataDailyPrevious(4);
    previousSocial.textContent = `Last day - ${resDaily}hrs`;
    resDaily = await getDataDailyPrevious(5);
    previousSelfcare.textContent = `Last day - ${resDaily}hrs`;
}

const getWeeklyReport = async () => {

    dailyLink.style.color = "hsl(236, 100%, 87%)";
    let resWeekly = await getDataWeekly(0);
    work.textContent = `${resWeekly}hrs`;
    resWeekly = await getDataWeekly(1);
    play.textContent = `${resWeekly}hrs`;
    resWeekly = await getDataWeekly(2);
    study.textContent = `${resWeekly}hrs`;
    resWeekly = await getDataWeekly(3);
    exercise.textContent = `${resWeekly}hrs`;
    resWeekly = await getDataWeekly(4);
    social.textContent = `${resWeekly}hrs`;
    resWeekly = await getDataWeekly(5);
    selfcare.textContent = `${resWeekly}hrs`;

    resWeekly = await getDataWeeklyPrevious(0);
    previousWork.textContent = `Last week - ${resWeekly}hrs`;
    resWeekly = await getDataWeeklyPrevious(1);
    previousPlay.textContent = `Last week - ${resWeekly}hrs`;
    resWeekly = await getDataWeeklyPrevious(2);
    previousStudy.textContent = `Last week - ${resWeekly}hrs`;
    resWeekly = await getDataWeeklyPrevious(3);
    previousExercise.textContent = `Last week - ${resWeekly}hrs`;
    resWeekly = await getDataWeeklyPrevious(4);
    previousSocial.textContent = `Last week - ${resWeekly}hrs`;
    resWeekly = await getDataWeeklyPrevious(5);
    previousSelfcare.textContent = `Last week - ${resWeekly}hrs`;
}

const getMonthlyReport = async () => {
    dailyLink.style.color = "hsl(236, 100%, 87%)";
    let resMonthly = await getDataMonthly(0);
    work.textContent = `${resMonthly}hrs`;
    resMonthly = await getDataMonthly(1);
    play.textContent = `${resMonthly}hrs`;
    resMonthly = await getDataMonthly(2);
    study.textContent = `${resMonthly}hrs`;
    resMonthly = await getDataMonthly(3);
    exercise.textContent = `${resMonthly}hrs`;
    resMonthly = await getDataMonthly(4);
    social.textContent = `${resMonthly}hrs`;
    resMonthly = await getDataMonthly(5);
    selfcare.textContent = `${resMonthly}hrs`;

    resMonthly = await getDataMonthlyPrevious(0);
    previousWork.textContent = `Last month - ${resMonthly}hrs`;
    resMonthly = await getDataMonthlyPrevious(1);
    previousPlay.textContent = `Last month - ${resMonthly}hrs`;
    resMonthly = await getDataMonthlyPrevious(2);
    previousStudy.textContent = `Last month - ${resMonthly}hrs`;
    resMonthly = await getDataMonthlyPrevious(3);
    previousExercise.textContent = `Last month - ${resMonthly}hrs`;
    resMonthly = await getDataMonthlyPrevious(4);
    previousSocial.textContent = `Last month - ${resMonthly}hrs`;
    resMonthly = await getDataMonthlyPrevious(5);
    previousSelfcare.textContent = `Last month - ${resMonthly}hrs`;
}


const getDataDaily = async (activityId) => {
    try {
        const res = await axios.get("data.json");
        const daily = res.data[activityId].timeframes.daily.current;
        return daily;
    } catch (e) {
        return "Try again";
    }
}

const getDataDailyPrevious = async (activityId) => {
    try {
        const res = await axios.get("data.json");
        const dailyPrevious = res.data[activityId].timeframes.daily.previous;
        return dailyPrevious;
    } catch (e) {
        return "Try again";
    }
}


const getDataWeekly = async (activityId) => {
    try {
        const res = await axios.get("data.json");
        const weekly = res.data[activityId].timeframes.weekly.current;
        return weekly;
    } catch (e) {
        return "Try again";
    }
}

const getDataWeeklyPrevious = async (activityId) => {
    try {
        const res = await axios.get("data.json");
        const weeklyPrevious = res.data[activityId].timeframes.weekly.previous;
        return weeklyPrevious;
    } catch (e) {
        return "Try again";
    }
}

const getDataMonthly = async (activityId) => {
    try {
        const res = await axios.get("data.json");
        const monthly = res.data[activityId].timeframes.monthly.current;
        return monthly;
    } catch (e) {
        console.log("Try again");
    }
}

const getDataMonthlyPrevious = async (activityId) => {
    try {
        const res = await axios.get("data.json");
        const monthlyPrevious = res.data[activityId].timeframes.monthly.previous;
        return monthlyPrevious;
    } catch (e) {
        return "Try again";
    }
}

dailyLink.addEventListener("click", getDailyReport);
weeklyLink.addEventListener("click", getWeeklyReport);
monthlyLink.addEventListener("click", getMonthlyReport);
