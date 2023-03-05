import { Component } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../post.service';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
listPost:Post[]=[]
  tab!:any;
  date=["2021-06-29","2021-06-30","2021-07-01"]
  con=0
  constructor(private postSer:PostService){
}
ngOnInit():void{
  this.getAllPosts()

}
getAllPosts(){
this.date.forEach(aa=>{
  this.postSer.getAllPost(aa).subscribe(data=>{
    this.listPost=data[0].posts
    // console.log("aaaaaaa",this.listPost[0].post_date | date:"short");

    this.listPost.forEach(element => {
          this.tab =element.post_comments.length
          element.post_comments=this.tab
          // console.log(this.tab,"aaaaaaaa");
       
        })

})

})

  // this.postSer.getAllPost().subscribe(data=>{
  //   this.listPost=data[0].posts
  //   console.log(this.listPost);
  //   this.listPost.forEach(element => {
  //     this.tab =element.post_comments.length
  //     element.post_comments=this.tab
  //     console.log(this.tab,"aaaaaaaa");
   
  //   });
    
    
  // })
}
show(post:Post,id:Date){
this.postSer.updatePost(post,id).subscribe(date=>{
  console.log(date);
  
})
// nb++
//   console.log(nb);
  
}

}