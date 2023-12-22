import Input  from '../components/Input';
import Text from '../components/Text';
import Button from '../components/Button';
import {useFormik } from 'formik';
import * as yup from 'yup';
import Card from '../components/Card';
import { useState } from 'react';

interface FormProps{
    fullname: string;
    email: string;
    date: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    username: string;
    password: string;
}

const HomeContainer = () => {

    const [step, setStep] = useState<number>(1);

    const handleNext = () => {
        if(step === 3){
            return
        }
        setStep((prevState) => prevState + 1)
    }

    const handlePrev = () => {
        if(step === 1){
            return
        }
        setStep((prevState) => prevState -1)
    }

    const formMik = useFormik({
        initialValues:{
            fullname: "",
            email: "",
            date: "",
            address:"",
            city:"",
            state:"",
            zipcode:"",
            username:"",
            password:""
        },
        onSubmit: (values: FormProps) => console.log(values),
        validationSchema: yup.object({
            fullname: yup.string().required(),
            email: yup.string().email().required(),
            date: yup.date().nullable().required('Date is required'),
            address: yup.string().required(),
            city: yup.string().required(),
            state: yup.string().required(),
            zipcode: yup.string().matches(/^\d{5}$/, 'Must valid 5-digit Code')
            .required('Zip Code is required'),
            username: yup.string().required(),
            password: yup.string().min(8, 'Password min 8 characters')
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d@$!%*#?&]+$/,
              'Password too weak'
            )
            .required('Password is required')
        })
    });

    return(
        <Card border>
          <form onSubmit={formMik.handleSubmit}>
            {step === 1 &&(
                <div>
                    <div>
                        <Text>{"Full Name"}</Text>
                        <Input type={"text"} className ="block border-neutral-400 border"
                            name={"fullname"}
                            value={formMik.values.fullname}
                            onChange={formMik.handleChange("fullname")}
                        />
                        {
                            formMik.errors.fullname && (
                                <Text>{formMik.errors.fullname}</Text>
                            )
                        }
                    </div>
                    <div>
                        <Text>{"Email Address"}</Text>
                        <Input type={"email"}  className ="block border-neutral-400 border"
                        name={"email"}
                        value={formMik.values.email}
                        onChange={formMik.handleChange("email")}
                        />

                        {
                            formMik.errors.email && (
                                <Text>{formMik.errors.email}</Text>
                            )
                        }
                    </div>
                
                    <div>
                        <Text>{"Date of Birth"}</Text>
                        <Input type={"date"}  className ="block border-neutral-400 border"
                        name={"date"}
                        value={formMik.values.date}
                        onChange={formMik.handleChange("date")}
                        />
                        {
                            formMik.errors.date && (
                                <Text>{formMik.errors.date}</Text>
                            )
                        }
                    </div>

                    <Button label={"Previous"} type={"button"} onClick={handlePrev}/>
                    <Button label={"Next"} type={"button"} onClick={handleNext}/>

                </div>
                


            )}
            {step === 2 &&(
                <div>
                    <div>
                        <Text>{"Street Address"}</Text>
                        <Input type={"text"} className ="block border-neutral-400 border"
                            name={"address"}
                            value={formMik.values.address}
                            onChange={formMik.handleChange("address")}
                        />
                        {
                            formMik.errors.address && (
                                <Text>{formMik.errors.address}</Text>
                            )
                        }

                    </div>

                    <div>
                        <Text>{"City"}</Text>
                        <Input type={"text"} className ="block border-neutral-400 border"
                            name={"city"}
                            value={formMik.values.city}
                            onChange={formMik.handleChange("city")}
                        />
                        {
                            formMik.errors.city && (
                                <Text>{formMik.errors.city}</Text>
                            )
                        }

                    </div>

                    <div>
                        <Text>{"State"}</Text>
                        <Input type={"text"} className ="block border-neutral-400 border"
                            name={"state"}
                            value={formMik.values.state}
                            onChange={formMik.handleChange("state")}
                        />
                        {
                            formMik.errors.state && (
                                <Text>{formMik.errors.state}</Text>
                            )
                        }

                    </div>

                    <div>
                        <Text>{"Zip Code"}</Text>
                        <Input type={"text"} className ="block border-neutral-400 border"
                            name={"zipcode"}
                            value={formMik.values.zipcode}
                            onChange={formMik.handleChange("zipcode")}
                        />
                        {
                            formMik.errors.zipcode && (
                                <Text>{formMik.errors.zipcode}</Text>
                            )
                        }
                    </div>

                    <Button label={"Previous"} type={"button"} onClick={handlePrev}/>
                    <Button label={"Next"} type={"button"} onClick={handleNext}/>
                </div>
            )}
            {step === 3 && (
                <div>
                    <div>
                        <Text>{"Username"}</Text>
                        <Input type={"text"} className ="block border-neutral-400 border"
                            name={"username"}
                            value={formMik.values.username}
                            onChange={formMik.handleChange("username")}
                        />
                        {
                            formMik.errors.username && (
                                <Text>{formMik.errors.username}</Text>
                            )
                        }

                    </div>

                    <div className='mb-4'>
                        <Text>{"Password"}</Text>
                        <Input type={"password"} className ="block border-neutral-400 border"
                            name={"password"}
                            value={formMik.values.password}
                            onChange={formMik.handleChange("password")}
                        />
                        {
                            formMik.errors.password && (
                                <Text>{formMik.errors.password}</Text>
                            )
                        }

                    </div>

                    <Button label={"Previous"} type={"button"} onClick={handlePrev}/>
                    <Button label={"Submit"} type={"submit"}/>
                
                </div>
            )}
                
            </form>
            
        </Card>
        
    )
}

export default HomeContainer