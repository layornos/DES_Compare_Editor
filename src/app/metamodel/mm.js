var SimulatorSpecificationMetamodel = function () {

    //
    // The metamodel to specify simulators
    //

    // Package(s) Definition(s)
    // Each model must be contained in a EPackage
    // It must have a name, a nsPrefix and nsURI
    var simSpecPackage = Ecore.EPackage.create({ 
        name: 'Simulator Specification', 
        nsPrefix: 'simSpec' , 
        nsURI: 'http://sdq.kit.edu/mosim/simspec'
    });
    
    // Classes

    // IDENTIFIER
    var identifier = Ecore.EClass.create({
        name: 'Identifier',
        eStructuralFeatures: [
            Ecore.EAttribute.create({
                name: 'id',
                eType: Ecore.EString
            }),
            Ecore.EAttribute.create({
                name: 'name',
                eType: Ecore.EString
            })
        ]
    })
    // SIMULATOR 
    // Root Element of the metamodel
    // Represents one Simulator
    var simulator = Ecore.EClass.create({ 
        name: 'Simulator',
        eSuperTypes: [
            identifier
        ],
        eStructuralFeatures: [
            Ecore.EAttribute.create({
                name: 'description', 
                eType: Ecore.EString
            }) 
        ] 
    });

    // SIMULATION ENTITY
    var entity = Ecore.EClass.create({
        name: 'Entity',
        eSuperTypes: [
            identifier
        ],
        eStructuralFeatures: [
            Ecore.EReference.create({
                name: 'has_attribute',
                upperBound: -1,
                containment: true,
                eType: attribute
            })
        ]
    })

    // ATTRIBUTE
    var attribute = Ecore.EClass.create({
        name: 'Attribute',
        eSuperTypes: [
            identifier
        ],
        eStructuralFeatures: [
            Ecore.EAttribute.create({
                name: 'type',
                eType: Ecore.EString
            })
        ]
    })

    // PROPERTY
    var property = Ecore.EClass.create({
        name: 'Porperty',
        eSuperTypes: [
            identifier
        ],
        eStructuralFeatures: [
            Ecore.EAttribute.create({
                name: 'description',
                eType: Ecore.EString
            })
        ]
    })

    // EVENT
    var event = Ecore.EClass.create({
        name: 'Event',
        eSuperTypes: [
            identifier
        ],
        eStructuralFeatures: [
            Ecore.EReference.create({
                name: 'entity',
                upperBound: -1,
                containment: true,
                eType: entity
            }),
            Ecore.EReference.create({
                name: 'schedules',
                upperBound: -1,
                containment: true,
                eType: schedules
            }),
            Ecore.EReference.create({
                name: 'read_attribute',
                upperBound: -1,
                containment: true,
                eType: attribute
            }),
            Ecore.EReference.create({
                name: 'writes',
                upperBound: -1,
                containment: true,
                eType: attribute
            }),
        ]
    })
    // SCHEDULES
    var schedules = Ecore.EClass.create({
        name : 'Schedules',
        eSuperTypes: [
            identifier
        ],
        eStructuralFeatures: [
            Ecore.EAttribute.create({
                name: 'condition',
                eType: Ecore.EString
            }),
            Ecore.EAttribute.create({
                name: 'delay',
                eType: Ecore.EString
            }),
            Ecore.EAttribute.create({
                name: 'startEvent',
                eType: event
            }),
            Ecore.EAttribute.create({
                name: 'endEvent',
                eType: event
            })
        ]

    })

    // WRITES ATTRIBUTE
    var writes_attribute = Ecore.EClass.create({
        name: 'WritesAttribute',
        eStructuralFeatures: [
            Ecore.EAttribute.create({
                name: 'condition',
                eType: Ecore.EString
            }),
            Ecore.EAttribute.create({
                name: 'writeFunction',
                eType: Ecore.EString
            }),
            Ecore.EAttribute.create({
                name: 'startEvent',
                eType: event
            }),
            Ecore.EAttribute.create({
                name: 'attribute',
                eType: attribute
            }),
        ]
    })
    // simulator.get('eStructuralFeatures').add(Ecore.EAttribute.create({name: 'id', eType: Ecore.EString}))
    // simulator.get('eStructuralFeatures').add(Ecore.EAttribute.create({name: 'name', eType: Ecore.EString}))
    // simulator.get('eStructuralFeatures').add(Ecore.EAttribute.create({name: 'description', eType: Ecore.EString}))


    simSpecPackage.get('eClassifiers').add(simulator);

    var resourceSet = Ecore.ResourceSet.create();
    // A Resource is used to load/save a model and also
    // handles de/serialization operations on a model

    var resource = resourceSet.create({ uri: '/simulator.json' });

    // Add the EPackage to the Resource
    resource.get('contents').add(simSpecPackage);

    // Serialize the model in JSON
    // console.log(resource.to(Ecore.JSON));

    // Serialize the model in XMI
    var xmi = resource.to(Ecore.XMI, true)
    console.log(xmi)
    document.write(xml_to_string(xmi))
    

};

module.exports = SimulatorSpecificationMetamodel;