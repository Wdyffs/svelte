import jobs from '../data/job_list.json';
import type { JobList } from '../model';

const job_list: JobList = jobs;

export const load = (() => {
  return {
    job_list
  } 
}) 

