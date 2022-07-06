import { Component, HostListener, OnInit } from "@angular/core";
@Component({
  selector: "app-dynamic-box",
  templateUrl: "./dynamic-box.component.html",
  styleUrls: ["./dynamic-box.component.scss"],
})
export class DynamicBoxComponent implements OnInit {
  boxArrayTemplate: string[] = new Array(20);
  boxArray: any;
  suffix: any;

  ngOnInit() {
    this.boxArray = new Array(30);
  }

  boxButtonClick(id: any) {
    alert("Button " + id + " is clicked");
  }

  @HostListener("window:scroll", ["$event"])
  windowScroll(e: any) {
    if (
      window.scrollY + window.innerHeight >=
      e.target["documentElement"].scrollHeight
    ) {
      this.boxArray.push(...this.boxArrayTemplate);
    }
  }
}
