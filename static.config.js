import path from 'path'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { db } from "./src/firebase";
export default {

  getRoutes: async () => {
   

    var dbCollection = await db.collection("news").get();
    let posts = [];
    dbCollection.forEach((doc) => {
      posts.push(doc.data())
    })

    var videoCollection = await db.collection("video").get();
    let videoPosts = [];
    videoCollection.forEach((doc) => {
      videoPosts.push(doc.data())
    })

    const child = posts.slice(2).map(post => ({
      path: `/post/${post.pk}`,
      template: 'src/containers/News',
      getData: () => ({
        post,
      })

    }))

    const catgoryArray = ['national','crime','entertainment','sport','health','crime','education','patna','darbhanga','delhi','gujrat','madhubani','samastipur']
   

    const categories= catgoryArray.map((categaory)=>({
      path : `/${(categaory)}`,
      template : 'src/containers/Category',
      getData : ()=>({
        data :posts.filter((post)=>{
                     return post.categaory == (categaory.charAt(0).toUpperCase() + categaory.slice(1));
                   })
      })

    }))



    // console.log(posts);
    return [

      {

        path: '/',
        getData: () => ({
          posts,videoPosts
        }),
        children: [...child, ...categories]
      },
      {
        path : '/videos',
        template : 'src/containers/Videos',
        getData:()=>({
          videoPosts
        }),
        children : videoPosts.map((video)=>({
          path : `/${video.pk}`,
          template : 'src/containers/VideoComponent',
          getData :()=>(
            {
              video
            }
          ) 
        }))
      }
    ]
  },
        



        // children: posts.filter(post => ({
        //   path: `/post/${post.categaory}`,
        //   template: 'src/containers/Category',
        //   getData: () => ({
        //     post,
        //   }),

        // })),
      
     
  //     {
  //       path : `/national`,
        
  //       getData: () => ({
  //         data :posts.filter((post)=>{
  //           return post.categaory == "National"
  //         })
  //       }),
        
  //     },
  //     {
  //       path : `/sport`,
        
  //       getData: () => ({
  //         data :posts.filter((post)=>{
  //           return post.categaory == "Sport"
  //         })
  //       }),
        
  //     },
  //     {
  //       path : `/entertainment`,
        
  //       getData: () => ({
  //         data :posts.filter((post)=>{
  //           return post.categaory == "Entertainment"
  //         })
  //       }),
        
  //     },
  //     {
  //       path : `/crime`,
        
  //       getData: () => ({
  //         data :posts.filter((post)=>{
  //           return post.categaory == "Crime"
  //         })
  //       }),
        
  //     },
  //     {
  //       path : `/health`,
        
  //       getData: () => ({
  //         data :posts.filter((post)=>{
  //           return post.categaory == "Health"
  //         })
  //       }),
        
  //     },
  //     {
  //       path : `/education`,
        
  //       getData: () => ({
  //         data :posts.filter((post)=>{
  //           return post.categaory == "Education"
  //         })
  //       }),
        
  //     },
  //     {
  //       path: '/blog',
  //       getData: () => ({
  //         posts,
  //       }),
  //       children: posts.map(post => ({
  //         path: `/post/${post.id}`,
  //         template: 'src/containers/Post',
  //         getData: () => ({
  //           post,
  //         }),
  //       })),
  //     },
    


  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),

  ],
}
