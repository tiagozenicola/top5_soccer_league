const getTables = data => {
  const html = getAsHtml(data)
  const tables = html.getElementsByTagName('table')
  const majorTables = Array.from(tables).slice(0,5)
  
  const mapTables = {
    'englad': getTeamsFromTable(majorTables[0]),
    'spain': getTeamsFromTable(majorTables[1]),
    'germany': getTeamsFromTable(majorTables[2]),
    'italy': getTeamsFromTable(majorTables[3]),
    'france': getTeamsFromTable(majorTables[4]),
  }

  return mapTables;
}

const getTeamsFromTable = table => {

  const teams = []

  table.querySelectorAll('tr').forEach((row, index) => {

    if (index === 0 || index === 5){
      return
    }

    const columns = row.querySelectorAll('td')

    teams.push({
      "name": columns[1].innerText,
      "games_played": columns[2].innerText,
      "win": columns[3].innerText,
      "drawn": columns[4].innerText,
      "lost": columns[5].innerText,
      "goals_for": columns[6].innerText,
      "goals_against": columns[7].innerText,
      "goal_difference": columns[8].innerText,
      "points": columns[9].innerText,
      "history": [],
      "percent": columns[9].innerText / (columns[2].innerText * 3),
    })

  })
  return teams
}

const getAsHtml = text => {
  const template = document.createElement('ghostElement');
  template.innerHTML = text
  return template
}

export {getTables};
