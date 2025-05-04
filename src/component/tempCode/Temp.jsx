import { useEffect, useState } from "react";

const Temp = () => {
    const [ skillSubjectsList , setSkillSubjectsList] = useState([])
    const [ skillMarkSheetList , setSkillMarkSheetList] = useState([])
    const [ skillSubjectLists , setSkillSubjectLists] = useState([])
    useEffect(()=>{
        console.log("skillSubjectsList >>",skillSubjectsList)
        console.log("skillMarkSheetList >> ",skillMarkSheetList)
    },[skillMarkSheetList,setSkillSubjectsList])
    const data = {
        "result_details": [
            {
                "id": 7,
                "academic_year_id": 29,
                "assigned_mark_sheet": [
                    [ // <-  item1
                        { // <-  item2
                            "mark_sheet_class": 631,
                            "exam_result_marksheet_id": 389,
                            "class_id": 644,
                            "mark_sheet_name": "COMM - 1",
                            "subject_details": [
                                { // <-  subject
                                    "id": 2026,
                                    "section_name": "co-scholastic",
                                    "is_co_scholastic": 1,
                                    "is_skill_subject": 0,
                                    "subjects": [
                                        {
                                            "id": 1404,
                                            "name": "Science",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 774,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2689,
                                                    "exam_name_id": 1117,
                                                    "name": "FAC - 1 co-scolastic",
                                                    "subject_id": 774,
                                                    "total_marks": null,
                                                    "exam_type": 2,
                                                    "exam_type_label": "Grade",
                                                    "converted_marks": null,
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0,
                                                    "grade_id": {
                                                        "id": 16,
                                                        "name": "test"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1405,
                                            "name": "Gujarati",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 933,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2690,
                                                    "exam_name_id": 1117,
                                                    "name": "FAC - 1 co-scolastic",
                                                    "subject_id": 933,
                                                    "total_marks": null,
                                                    "exam_type": 2,
                                                    "exam_type_label": "Grade",
                                                    "converted_marks": null,
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0,
                                                    "grade_id": {
                                                        "id": 16,
                                                        "name": "test"
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": 2027,
                                    "section_name": "Skill Subject",
                                    "is_co_scholastic": 0,
                                    "is_skill_subject": 1,
                                    "subjects": [
                                        {
                                            "id": 1406,
                                            "name": "Social Science",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 934,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2691,
                                                    "exam_name_id": 1118,
                                                    "name": "FAC -1 Skill-subjects",
                                                    "subject_id": 934,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "100.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1407,
                                            "name": "Sanskrit",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 935,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2692,
                                                    "exam_name_id": 1118,
                                                    "name": "FAC -1 Skill-subjects",
                                                    "subject_id": 935,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "100.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": 2028,
                                    "section_name": "COM - 1",
                                    "is_co_scholastic": 0,
                                    "is_skill_subject": 0,
                                    "subjects": [
                                        {
                                            "id": 1402,
                                            "name": "English",
                                            "totalMarks": "100.00",
                                            "passingMarks": "33.00",
                                            "selected": true,
                                            "additional_marks": "5.00",
                                            "subject_id": 771,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2683,
                                                    "exam_name_id": 1114,
                                                    "name": "FAC - 1",
                                                    "subject_id": 771,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2684,
                                                    "exam_name_id": 1115,
                                                    "name": "SAC - 1",
                                                    "subject_id": 771,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2685,
                                                    "exam_name_id": 1116,
                                                    "name": "SAD - 1",
                                                    "subject_id": 771,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "20.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 6.6
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1403,
                                            "name": "Maths",
                                            "totalMarks": "100.00",
                                            "passingMarks": "33.00",
                                            "selected": true,
                                            "additional_marks": "5.00",
                                            "subject_id": 772,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2686,
                                                    "exam_name_id": 1114,
                                                    "name": "FAC - 1",
                                                    "subject_id": 772,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2687,
                                                    "exam_name_id": 1115,
                                                    "name": "SAC - 1",
                                                    "subject_id": 772,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2688,
                                                    "exam_name_id": 1116,
                                                    "name": "SAD - 1",
                                                    "subject_id": 772,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "20.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 6.6
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "mark_sheet_class": 632,
                            "exam_result_marksheet_id": 389,
                            "class_id": 645,
                            "mark_sheet_name": "COMM - 1",
                            "subject_details": [
                                {
                                    "id": 2029,
                                    "section_name": "co-scholastic",
                                    "is_co_scholastic": 1,
                                    "is_skill_subject": 0,
                                    "subjects": [
                                        {
                                            "id": 1410,
                                            "name": "Social Science",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 1859,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2699,
                                                    "exam_name_id": 1081,
                                                    "name": "FA - 1 co-scolastic",
                                                    "subject_id": 1859,
                                                    "total_marks": null,
                                                    "exam_type": 2,
                                                    "exam_type_label": "Grade",
                                                    "converted_marks": null,
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0,
                                                    "grade_id": {
                                                        "id": 48,
                                                        "name": "grade 100"
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": 2030,
                                    "section_name": "Skill Subject",
                                    "is_co_scholastic": 0,
                                    "is_skill_subject": 1,
                                    "subjects": [
                                        {
                                            "id": 1411,
                                            "name": "Physical Education",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 1875,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2700,
                                                    "exam_name_id": 1082,
                                                    "name": "FA  -1 Skill subject",
                                                    "subject_id": 1875,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "100.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1412,
                                            "name": "Chemistry",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 1876,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2701,
                                                    "exam_name_id": 1082,
                                                    "name": "FA  -1 Skill subject",
                                                    "subject_id": 1876,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "100.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": 2031,
                                    "section_name": "COM -1",
                                    "is_co_scholastic": 0,
                                    "is_skill_subject": 0,
                                    "subjects": [
                                        {
                                            "id": 1408,
                                            "name": "English",
                                            "totalMarks": "100.00",
                                            "passingMarks": "33.00",
                                            "selected": true,
                                            "additional_marks": "5.00",
                                            "subject_id": 779,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2693,
                                                    "exam_name_id": 1078,
                                                    "name": "FA - 1",
                                                    "subject_id": 779,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2694,
                                                    "exam_name_id": 1079,
                                                    "name": "SA - 1",
                                                    "subject_id": 779,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2695,
                                                    "exam_name_id": 1080,
                                                    "name": "SD - 1",
                                                    "subject_id": 779,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "20.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 6.6
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1409,
                                            "name": "Maths",
                                            "totalMarks": "100.00",
                                            "passingMarks": "33.00",
                                            "selected": true,
                                            "additional_marks": "5.00",
                                            "subject_id": 780,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2696,
                                                    "exam_name_id": 1078,
                                                    "name": "FA - 1",
                                                    "subject_id": 780,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2697,
                                                    "exam_name_id": 1079,
                                                    "name": "SA - 1",
                                                    "subject_id": 780,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2698,
                                                    "exam_name_id": 1080,
                                                    "name": "SD - 1",
                                                    "subject_id": 780,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "20.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 6.6
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    [
                        {
                            "mark_sheet_class": 635,
                            "exam_result_marksheet_id": 391,
                            "class_id": 644,
                            "mark_sheet_name": "COMM - 2",
                            "subject_details": [
                                {
                                    "id": 2032,
                                    "section_name": "co-scholastic",
                                    "is_co_scholastic": 1,
                                    "is_skill_subject": 0,
                                    "subjects": [
                                        {
                                            "id": 1416,
                                            "name": "Science",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 774,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2711,
                                                    "exam_name_id": 1122,
                                                    "name": "FAC - 2 co-scolastic",
                                                    "subject_id": 774,
                                                    "total_marks": null,
                                                    "exam_type": 2,
                                                    "exam_type_label": "Grade",
                                                    "converted_marks": null,
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0,
                                                    "grade_id": {
                                                        "id": 16,
                                                        "name": "test"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1417,
                                            "name": "Gujarati",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 933,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2712,
                                                    "exam_name_id": 1122,
                                                    "name": "FAC - 2 co-scolastic",
                                                    "subject_id": 933,
                                                    "total_marks": null,
                                                    "exam_type": 2,
                                                    "exam_type_label": "Grade",
                                                    "converted_marks": null,
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0,
                                                    "grade_id": {
                                                        "id": 16,
                                                        "name": "test"
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": 2033,
                                    "section_name": "Skill Subject",
                                    "is_co_scholastic": 0,
                                    "is_skill_subject": 1,
                                    "subjects": [
                                        {
                                            "id": 1418,
                                            "name": "Social Science",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 934,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2713,
                                                    "exam_name_id": 1123,
                                                    "name": "FAC -2 Skill - subject",
                                                    "subject_id": 934,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "100.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1419,
                                            "name": "Sanskrit",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 935,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2714,
                                                    "exam_name_id": 1123,
                                                    "name": "FAC -2 Skill - subject",
                                                    "subject_id": 935,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "100.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": 2034,
                                    "section_name": "COM - 2",
                                    "is_co_scholastic": 0,
                                    "is_skill_subject": 0,
                                    "subjects": [
                                        {
                                            "id": 1413,
                                            "name": "English",
                                            "totalMarks": "100.00",
                                            "passingMarks": "33.00",
                                            "selected": true,
                                            "additional_marks": "5.00",
                                            "subject_id": 771,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2702,
                                                    "exam_name_id": 1119,
                                                    "name": "FAC - 2",
                                                    "subject_id": 771,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2703,
                                                    "exam_name_id": 1120,
                                                    "name": "SAC - 2",
                                                    "subject_id": 771,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2704,
                                                    "exam_name_id": 1121,
                                                    "name": "SAD - 2",
                                                    "subject_id": 771,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "20.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 6.6
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1414,
                                            "name": "Maths",
                                            "totalMarks": "100.00",
                                            "passingMarks": "33.00",
                                            "selected": true,
                                            "additional_marks": "5.00",
                                            "subject_id": 772,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2705,
                                                    "exam_name_id": 1119,
                                                    "name": "FAC - 2",
                                                    "subject_id": 772,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2706,
                                                    "exam_name_id": 1120,
                                                    "name": "SAC - 2",
                                                    "subject_id": 772,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2707,
                                                    "exam_name_id": 1121,
                                                    "name": "SAD - 2",
                                                    "subject_id": 772,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "20.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 6.6
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1415,
                                            "name": "Hindi",
                                            "totalMarks": "100.00",
                                            "passingMarks": "33.00",
                                            "selected": true,
                                            "additional_marks": "5.00",
                                            "subject_id": 773,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2708,
                                                    "exam_name_id": 1119,
                                                    "name": "FAC - 2",
                                                    "subject_id": 773,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2709,
                                                    "exam_name_id": 1120,
                                                    "name": "SAC - 2",
                                                    "subject_id": 773,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2710,
                                                    "exam_name_id": 1121,
                                                    "name": "SAD - 2",
                                                    "subject_id": 773,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "20.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 6.6
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "mark_sheet_class": 636,
                            "exam_result_marksheet_id": 391,
                            "class_id": 645,
                            "mark_sheet_name": "COMM - 2",
                            "subject_details": [
                                {
                                    "id": 2035,
                                    "section_name": "co-scholastic",
                                    "is_co_scholastic": 1,
                                    "is_skill_subject": 0,
                                    "subjects": [
                                        {
                                            "id": 1423,
                                            "name": "Social Science",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 1859,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2724,
                                                    "exam_name_id": 1088,
                                                    "name": "FA -2 co-scolastic",
                                                    "subject_id": 1859,
                                                    "total_marks": null,
                                                    "exam_type": 2,
                                                    "exam_type_label": "Grade",
                                                    "converted_marks": null,
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0,
                                                    "grade_id": {
                                                        "id": 48,
                                                        "name": "grade 100"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1424,
                                            "name": "Computer",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 1861,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2725,
                                                    "exam_name_id": 1088,
                                                    "name": "FA -2 co-scolastic",
                                                    "subject_id": 1861,
                                                    "total_marks": null,
                                                    "exam_type": 2,
                                                    "exam_type_label": "Grade",
                                                    "converted_marks": null,
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0,
                                                    "grade_id": {
                                                        "id": 48,
                                                        "name": "grade 100"
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": 2036,
                                    "section_name": "Skill Subject",
                                    "is_co_scholastic": 0,
                                    "is_skill_subject": 1,
                                    "subjects": [
                                        {
                                            "id": 1425,
                                            "name": "Physical Education",
                                            "totalMarks": "0.00",
                                            "passingMarks": "0.00",
                                            "selected": true,
                                            "additional_marks": "0.00",
                                            "subject_id": 1875,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2726,
                                                    "exam_name_id": 1087,
                                                    "name": "FA - 2 Skill subject",
                                                    "subject_id": 1875,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "100.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": 2037,
                                    "section_name": "COM - 2",
                                    "is_co_scholastic": 0,
                                    "is_skill_subject": 0,
                                    "subjects": [
                                        {
                                            "id": 1420,
                                            "name": "English",
                                            "totalMarks": "100.00",
                                            "passingMarks": "33.00",
                                            "selected": true,
                                            "additional_marks": "5.00",
                                            "subject_id": 779,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2715,
                                                    "exam_name_id": 1083,
                                                    "name": "FA  - 2",
                                                    "subject_id": 779,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2716,
                                                    "exam_name_id": 1084,
                                                    "name": "SA - 2",
                                                    "subject_id": 779,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2717,
                                                    "exam_name_id": 1085,
                                                    "name": "SD -2",
                                                    "subject_id": 779,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "20.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 6.6
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1421,
                                            "name": "Maths",
                                            "totalMarks": "100.00",
                                            "passingMarks": "33.00",
                                            "selected": true,
                                            "additional_marks": "5.00",
                                            "subject_id": 780,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2718,
                                                    "exam_name_id": 1083,
                                                    "name": "FA  - 2",
                                                    "subject_id": 780,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2719,
                                                    "exam_name_id": 1084,
                                                    "name": "SA - 2",
                                                    "subject_id": 780,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2720,
                                                    "exam_name_id": 1085,
                                                    "name": "SD -2",
                                                    "subject_id": 780,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "20.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 6.6
                                                }
                                            ]
                                        },
                                        {
                                            "id": 1422,
                                            "name": "Science",
                                            "totalMarks": "100.00",
                                            "passingMarks": "33.00",
                                            "selected": true,
                                            "additional_marks": "5.00",
                                            "subject_id": 782,
                                            "code": null,
                                            "exams": [
                                                {
                                                    "id": 2721,
                                                    "exam_name_id": 1083,
                                                    "name": "FA  - 2",
                                                    "subject_id": 782,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2722,
                                                    "exam_name_id": 1084,
                                                    "name": "SA - 2",
                                                    "subject_id": 782,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "40.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 13.2
                                                },
                                                {
                                                    "id": 2723,
                                                    "exam_name_id": 1085,
                                                    "name": "SD -2",
                                                    "subject_id": 782,
                                                    "total_marks": "100.00",
                                                    "exam_type": 1,
                                                    "exam_type_label": "Marks",
                                                    "converted_marks": "20.00",
                                                    "is_exist": true,
                                                    "converted_passing_marks": 6.6
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                ]
            }
        ]
    }
    const markSheet = ['COMM-1','COMM-2','COMM-3']

    // const getTotalGrade = (skillMarkSheet, subject, what, skillSubjectList) => {
    //     console.log(">>>",skillSubjectList.flat())
    //     const result = skillSubjectList.flat().find(
            
    //         (obj)=>{
    //             if(obj.mark_sheet_name == skillMarkSheet){
    //                 obj.subject_details.find(
    //                     (subDetails)=>{
    //                         subDetails.subjects.find(
    //                             (eachSub)=>{
    //                                 if(eachSub.name == subject){
    //                                     return eachSub
    //                                 }
    //                             }
    //                         )
    //                     }
    //                 )
    //             }
    //         }
    //     )
    //     console.log('result: >>>>>', result);
        
    // };
    const getTotalGrade = (skillMarkSheet, subject, what) => {
        // console.log(">>>", skillSubjectList.flat());

        const result = skillSubjectLists?.flat()?.find((markSheet) => 
            markSheet.mark_sheet_name === skillMarkSheet
        );
        if (!result) return null;

        const subjectDetails = result.subject_details?.find((subDetails) =>
            subDetails.subjects?.some((eachSub) => eachSub.name === subject)
        );

        if (!subjectDetails) return null;

        const temp1 = subjectDetails.subjects?.find((eachSub) => eachSub.name === subject) || null;
        // console.log(">>> ? temp1 ",temp1)
        if(!subjectDetails) return null;
        
        if(what=='totalMarks'){
            return temp1.totalMarks
        }
        else{
            return temp1.exams[0].name || '-'
        }


    
        // const result = skillSubjectList.flat().find((markSheet) => {
        //     if (markSheet.mark_sheet_name === skillMarkSheet) {
        //         return markSheet.subject_details.some((subDetails) =>
        //             subDetails.subjects.some((eachSub) => eachSub.name === subject)
        //         );
        //     }
        //     return false;
        // });
    
        // return result || null; // Returns null if no match is found
    };
    
    useEffect(() => {

        const resultDetails = data.result_details
        // console.log('esultDetails: >>', resultDetails);

        const coSchoolasticList = []
        const skillSubjectList = []
        const mainSubjectList = []

        resultDetails[0].assigned_mark_sheet.forEach((item1)=>{
            const co_sch = []
            const skill = []
            const main = []
            item1.forEach((item2)=>{
                const coTemp = {
                    ...item2,
                    subject_details : item2.subject_details.filter( (subject)=> subject.is_co_scholastic == 1)
                }
                co_sch.push(coTemp)

                const skillTemp = {
                    ...item2,
                    subject_details : item2.subject_details.filter( (subject)=> subject.is_skill_subject == 1)
                }
                skill.push(skillTemp)

                const mainTemp = {
                    ...item2,
                    subject_details : item2.subject_details.filter( (subject)=> subject.is_co_scholastic == 0 &&  subject.is_skill_subject == 0)
                }
                main.push(mainTemp)
            })
            coSchoolasticList.push(co_sch)
            setSkillSubjectLists( skillSubjectList.push(skill))
            mainSubjectList.push(main)
        })
        if(skillSubjectList){
            // console.log(">>>>>>>>>",getTotalGrade("COMM - 1","Sanskrit",'grade',skillSubjectList))
            const result = getTotalGrade("COMM - 1", "Social Science", "grade");

            // console.log(">>>>> ?",result);
        }

        // console.log("ye le co-Schoolastic >>",coSchoolasticList)
        // console.log("ye le skillSubjectList >>",skillSubjectList)
        // console.log("ye le temp skill>>",skillSubjectList)
        // console.log("ye le temp main>>",mainSubjectList)


        const extractSkillSubjectData= ()=> {
            let markSheets = new Set();
            let subjects = new Set();
            skillSubjectList.forEach((group) => {
                group.forEach((markSheetObj) => {
                    markSheets.add(markSheetObj.mark_sheet_name);
                    markSheetObj.subject_details.forEach((detail) => {
                        detail.subjects.forEach((subject) => {
                            subjects.add(subject.name);
                        });
                    });
                });
            });
            
            setSkillMarkSheetList(Array.from(markSheets));
            setSkillSubjectsList(Array.from(subjects));
        }
        extractSkillSubjectData()

        // const coScholasticList = resultDetails[0]?.assigned_mark_sheet?.map(
        //     (assigned_mark_sheet) =>
        //         assigned_mark_sheet?.map(
        //             (assigned_mark_sheetIN)=>({
        //                 ...assigned_mark_sheetIN,
        //                 subject_details: assigned_mark_sheetIN?.subject_details?.filter(
        //                     (subject_details)=>subject_details.is_co_scholastic == 1
        //                 )
        //             })
        //         )
        //     )
        //     const skillList = resultDetails[0]?.assigned_mark_sheet?.map(
        //         (assigned_mark_sheet) =>
        //             assigned_mark_sheet?.map(
        //                 (assigned_mark_sheetIN)=>({
        //                     ...assigned_mark_sheetIN,
        //                     subject_details: assigned_mark_sheetIN?.subject_details?.filter(
        //                         (subject_details)=>subject_details.is_co_scholastic == 1
        //                     )
        //                 })
        //             )
        //         )
        //     const mainList = resultDetails[0]?.assigned_mark_sheet?.map(
        //             (assigned_mark_sheet) =>
        //                 assigned_mark_sheet?.map(
        //                     (assigned_mark_sheetIN)=>({
        //                         ...assigned_mark_sheetIN,
        //                         subject_details: assigned_mark_sheetIN?.subject_details?.filter(
        //                             (subject_details)=>subject_details.is_co_scholastic == 1
        //                         )
        //                     })
        //                 )
        //             )
            // console.log('coScholasticList: >>', coScholasticList);
            // console.log('skillList: >>', skillList);
            // console.log('mainList: >>', mainList);

        // fetchDetails(){
        //     const payload = {
        //       combine_result_id : this.markSheetID
        //     }
            // this.combineMarkSheetService.fetchResultDetails(payload).subscribe((res:any)=&gt;{
            //   if(res.status){
            //     this.resultDetails  = res.data.result_details
            //     console.log('this.resultDetails: &gt;&gt;', this.resultDetails);
            //     this.resultSettings = res.data.result_settings

            //     this.signatureDetails = this.resultSettings.signature
            //     this.remarks          = this.resultSettings.remark


                // const categorizeSubjects = (assignedMarkSheet, condition) =&gt; {
                //   return assignedMarkSheet?.map((assigned_mark_sheet) =&gt;
                //     assigned_mark_sheet?.map((assigned_mark_sheetIN) =&gt; ({
                //       ...assigned_mark_sheetIN,
                //       subject_details: assigned_mark_sheetIN?.subject_details?.filter(condition),
                //     }))
                //   );
                // };

                // this.coScholasticSubjects = categorizeSubjects(this.resultDetails[0].assigned_mark_sheet, 
                //   (subject_details) =&gt; subject_details.is_co_scholastic == 1);

                // this.skillSubjectList = categorizeSubjects(this.resultDetails[0].assigned_mark_sheet, 
                //   (subject_details) =&gt; subject_details.is_skill_subject == 1);

                // this.mainSubjectList = categorizeSubjects(this.resultDetails[0].assigned_mark_sheet, 
                //   (subject_details) =&gt; subject_details.is_co_scholastic == 0 &amp;&amp; subject_details.is_skill_subject == 0);

                // this.extractUniqueMarkSheets();
                // this.extractUniqueSubjects();
                // this.extractSkillSubjectData();


                // this.coScholasticList = this.resultDetails[0].assigned_mark_sheet?.map(
                //   ( assigned_mark_sheet:any ) =&gt; 
                //       assigned_mark_sheet?.map(
                //         (assigned_mark_sheetIN:any)=&gt;({
                //           ...assigned_mark_sheetIN,
                //           subject_details : assigned_mark_sheetIN?.subject_details?.filter(
                //             (subject_details:any)=&gt;subject_details.is_co_scholastic==1
                //           )
                //         })
                //       )
                // )

                // this.extractUniqueMarkSheets();
                // this.extractUniqueSubjects();

                // this.extractSkillSubjectData()

                // let uniqueCoScholasticSubjects = new Set(); // Using a Set to ensure uniqueness

                // this.resultDetails[0].assigned_mark_sheet?.forEach((assigned_mark_sheet: any) =&gt; {
                //   assigned_mark_sheet.forEach((assigned_mark_sheetIN: any) =&gt; {
                //     const coScholasticSubjects = assigned_mark_sheetIN?.subject_details
                //       ?.filter((subject: any) =&gt; subject.is_co_scholastic == 1)

                //       // .flatMap((subject: any) =&gt; subject.subjects.map((sub: any) =&gt; sub.name));

                //     const skillSubjects = assigned_mark_sheetIN?.subject_details
                //       ?.filter((subject: any) =&gt; subject.is_skill_subject == 1);

                //     const mainSubjects = assigned_mark_sheetIN?.subject_details
                //       ?.filter((subject: any) =&gt; subject.is_co_scholastic == 0 &amp;&amp; subject.is_skill_subject == 0);

                //     this.coScholasticList=[{ ...assigned_mark_sheetIN, subject_details: coScholasticSubjects }];
                //     this.skillSubjectList=[{ ...assigned_mark_sheetIN, subject_details: skillSubjects }];
                //     this.mainSubjectList=[{ ...assigned_mark_sheetIN, subject_details: mainSubjects }];

                //     // this.coScholasticSubjects.push(...(coScholasticSubjects).flatMap((subject: any) =&gt; subject.subjects.map((sub: any) =&gt; sub.name)));
                //     coScholasticSubjects.forEach((subject: any) =&gt; {
                //       subject.subjects.forEach((sub: any) =&gt; uniqueCoScholasticSubjects.add(sub.name));
                //     });
                //   });
                // });

                // this.coScholasticSubjects = [...uniqueCoScholasticSubjects];

                // console.log("&gt;&gt;coScholasticList",this.coScholasticList )
                // const uniqueSubjects: { [key: string]: string } = {}; // Use an object to ensure uniqueness
                // const ye: { name: string; grade: string }[] = []; // Array for unique objects

                // this.coScholasticList?.forEach((coSchlArr: any) =&gt; {
                //   coSchlArr?.forEach((coSchl: any) =&gt; {
                //     coSchl.subject_details?.forEach((subjectDetails: any) =&gt; {
                //       subjectDetails.subjects?.forEach((subject: any) =&gt; {
                //         const subjectName = subject.name;
                //         const gradeName = subject.exams.length &gt; 0 ? subject.exams[0].grade_id.name : "N/A";

                //         if (!uniqueSubjects[subjectName]) {
                //           uniqueSubjects[subjectName] = subjectName;
                //           this.coScholasticSubjects.push({ name: subjectName, grade: gradeName });
                //         }
                //       });
                //     });
                //   });
                // });


                // this.coScholasticList.flat().forEach((markSheet) =&gt; {
                //   this.markSheets.push(markSheet);
                //   markSheet.subject_details.forEach((detail) =&gt; {
                //     detail.subjects.forEach((subject) =&gt; {
                //       this.uniqueSubjects.add(subject.name);
                //     });
                //   });
                // });


                // console.log("&gt;&gt; markSheets", this.markSheets)
                // console.log("&gt;&gt; uniqueSubjects", this.uniqueSubjects)
                // console.log("&gt;&gt;ye", this.coScholasticSubjects)



                // const co_scholastic = this.resultDetails[0].assigned_mark_sheet?.map(
                //   (assigned_mark_sheet: any) =&gt; 
                //     assigned_mark_sheet.map(
                //       (sheet: any) =&gt; ({
                //         ...sheet,
                //         subject_details: sheet.subject_details?.filter(
                //           (subject: any) =&gt; subject.is_co_scholastic === 1
                //         ),
                //       })
                //     )
                // );



    //             if (!this.resultSettings.hasOwnProperty('is_student_wise')) {
    //               this.resultSettings['is_student_wise'] = true
    //             }
    //             this.getGradeList(this.classId)
    //           }
    //           else{

    //           }
    //         },(error:any)=&gt;{
    //           this.toaster.showError( error?.error?.message ?? error?.message )
    //         })

        //   }
    }, [])

return (
    <div>
        ye I m Running
        <table>
            <thead>
                <tr className="border black m-4 p-4 w-20" >
                    <th className="border black" >Subjects</th>
                    {skillMarkSheetList.map( (markSheetName,index) => (
                        <th key={index} className="border black">{markSheetName} 
                            <table>
                                <tr>
                                    <td className="border black" >Total Marks</td>
                                    <td className="border black" >Grade</td>
                                </tr>
                            </table>
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {skillSubjectsList.map((subject, index) => (
                    <tr key={index}>
                        <td className="border black">{subject}</td>
                        {skillSubjectsList.map((skillMarkSheet, index) => (
                            <td key={index} className="border black">
                                <table>
                                    <tr>
                                        <td className="border black">{getTotalGrade(skillMarkSheet, subject, 'total')}</td>
                                        <td className="border black">{getTotalGrade(skillMarkSheet, subject, 'grade')}</td>
                                    </tr>
                                </table>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
            
        </table>
    </div>
)
}
export default Temp;