import React, { useState } from 'react';
import Tabs from '../Components/Tabs';
import { SKILL_TABS, SKILLS } from '../utils/data';
import SkillCard from '../Components/SkillCard';
import { motion } from 'framer-motion';

const TechnicalProfiency = () => {
    const [tabData, setTabData] = useState(SKILLS);
    const [activeTab, setActiveTab] = useState("all");

    const handleValueChange = (value) => {
        if (value === "all") {
            setTabData(SKILLS);
            setActiveTab("all");
            return;
        }
        const updatedList = SKILLS.filter((skill) => skill.type === value);
        setTabData(updatedList);
        setActiveTab(value);
    };

    return (
        <section id='skills' className='bg-white background mt-20'>
            <div className='container mx-auto p-10'>
                <div className='w-full lg:w-[60vw] mx-auto'>
                    <h4 className='section-tittle'>Technical Proficiency</h4>
                    <p>A versatile developer with hands-on expertise in modern technologies, tools, and frameworks, dedicated to building efficient, scalable, and user-centric solutions.</p>
                </div>
                <Tabs
                    tabList={SKILL_TABS}
                    activeTab={activeTab}
                    onChange={handleValueChange}
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {tabData.map((skill,index) => (
                    <motion.div key={skill.id}
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:0.4,delay:index*0.1}}>
                        <SkillCard
                            key={skill.id}
                            icon={<skill.icon className="w-6 h-6 text-violet-600" />}
                            skillName={skill.skill}
                            description={skill.description}
                            progress={skill.progress}
                        />
                    </motion.div>
                    ))}
                </div>
                    
            </div>
        </section>
    );
};

export default TechnicalProfiency;
