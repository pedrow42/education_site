const Database = require('./database/db')

const {subjects, weekdays, getSubject} = require('./utils/format')

function pageLanding(req, res){
    return res.render("site.html")
}
function pageStudy(req, res){
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time){
        return res.render("study.html", {proffys, filters, subjects, weekdays})
    }

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekdays}
            AND class_schedule.time_from <= ${filters.time}
            AND class_schedule.time_to > ${filters.time}
        )
    `
}
function pageGiveClasses(req, res){
    const data = req.query
    //se tiver dados
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data) //adicionar data a lista de proffys
        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}