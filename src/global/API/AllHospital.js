import { useState } from 'react'

function AllHospital() {
    const [hospitals, setHospital] = useState([
        {
            id:'1',
            name:'Sahyadri Super Speciality Hospital',
            image:'https://sahyadrihospital.com/wp-content/uploads/2021/05/Web-Banner_DG-MOBILE.jpg',
            location:'Plot no.30 – C, Erandwane, Deccan Gymkhana, Pune 411004, Maharashtra, India',
            description:'Sahyadri Super Speciality Hospital, Deccan Gymkhana boasts of a Team of Medical Consultants dedicated to work exclusively within the Sahyadri Group of Hospitals who are the most sought after experts in their own fields with National & International acclaim.',
            specialities:[
                'Neurosurgery',
                'Organ Transplants',
                'Haematology',
                'Cardilogy',
                'Neurology',
                'Cardiac Surgery',
                'Orthopaedics',
                'Oncology',
                'Endocrinology',
                'Gastroenterology',
                'General Surgery',
                'Urology'
            ],
            services:[
                '24-Hour Services',
                'Laboratory',
                'Radiology & Diagnostics'
            ],
            facilities:[
                'InPatient Rooms',
                'Operating Theatre',
                'Daycare surgery Unit',
                'Endoscopy Suite',
                'Dialysis',
                'Cafeteria'
            ],
            contact_no:'+91 8806 25 25 25',
            email_id:'feedback@sahyadrihospitals.com',
            fax_no:'+91 20 6721 5098',
            grievances:'Mr. Rohan Mirage',
            reviews:[
                {
                    id:'0',
                    name:'Pruthviraj Rajput',
                    location:'Shahada, Maharastra',
                    feedback:'Very Very Good Facilitys Provide This Hospital',
                }
            ],
            join_Date: '25 March 2021',
            opning: '09:00 PM',
            ending: '12:00 AM'
        }
    ])
    return hospitals
}

export default AllHospital
