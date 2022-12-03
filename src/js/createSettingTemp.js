class CreateSettingsList {
  constructor(ulList, temp) {
    this.ulList = ulList;
    this.temp = temp;
  }

  deleteElements() {
    this.ulList.find("li").hide();
  }
  showElements() {
    this.ulList.find("li").show();
  }
  createElements() {
    $(this.ulList).append(this.temp);
  }
}
