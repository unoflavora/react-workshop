const DB = {
  'indra@gmail.com': 'rahasia',
}

export default function checkPassword(email, password) {
  return DB[email] === password
}