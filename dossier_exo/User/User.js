class User {
  constructor(F, L, mail, date) {
    this.firstname = F;
    this.lastname = L;
    this.mail = mail;
    this.date = date;
  }

  isValid() {
    const currentDate = new Date();
    if (currentDate.getFullYear() - this.date.getFullYear() < 13) {
      return false;
    }

    if (this.firstname == null || this.lastname == null) {
      return false;
    }

    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexMail.test(this.mail)) {
      return false;
    }
    return true;
  }
}

module.exports = User;
