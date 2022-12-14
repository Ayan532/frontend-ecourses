import { createReducer } from "@reduxjs/toolkit";

export const courseReducer=createReducer({courses:[],lectures:[],trending:[]},{

  AllCourseRequest:(state)=>{
    state.loading=true;
  },
  AllCourseSuccess:(state,action)=>{
    state.loading=false;    
    state.courses=action.payload.courses;
    state.filteredCoursesCount=action.payload.filteredCoursesCount;
    state.CourseCount=action.payload.CourseCount;
    state.resultperPage=action.payload.resultperPage;
  },
  AllCourseFailure:(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  },
  TrendingCourseRequest:(state)=>{
    state.loading=true;
  },
  TrendingCourseSuccess:(state,action)=>{
    state.loading=false;
    state.trending=action.payload;
  },
  TrendingCourseFailure:(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  },
  AddToPlaylistRequest:(state)=>{
    state.loading=true;
  },
  AddToPlaylistSuccess:(state,action)=>{
    state.loading=false;
    state.message=action.payload.message
  },
  AddToPlaylistFailure:(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  },
  CourseLecturesRequest:(state)=>{
    state.loading=true;
  },
  CourseLecturesSuccess:(state,action)=>{
    state.loading=false;
    state.lectures=action.payload;
  },
  CourseLecturesFailure:(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  },
  clearError:(state)=>{
    state.error=null
},
 clearMessage:(state)=>{
    state.message=null
}

})