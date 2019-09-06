function simulator_specification() {

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

    // SIMULATOR 
    // Root Element of the metamodel
    // Represents one Simulator
    var simulator = Ecore.EClass.create({ 
        name: 'Simulator',
        eStructuralFeatures: [
            Ecore.EAttribute.create({
                name: 'id', 
                eType: Ecore.EString
            }),
            Ecore.EAttribute.create({
                name: 'name', 
                eType: Ecore.EString
            }),
            Ecore.EAttribute.create({
                name: 'description', 
                eType: Ecore.EString
            }) 
        ] 
    });

    // SIMULATION ENTITY
    var entity = Ecore.EClass.create({
        name: 'Entity',

    })

    // ATTRIBUTE
    var attribute = Ecore.EClass.create({
        name: 'Entity',
        eStructuralFeatures: [
            Ecore.EAttribute.create({
                name: 'id',
                eType: Ecore.EString
            }),
            Ecore.EAttribute.create({
                name: 'name',
                eType: Ecore.EString
            }),
            Ecore.EAttribute.create({
                name: 'type',
                eType: Ecore.EString
            })
        ]
    })

    // PROPERTY
    var property = Ecore.EClass.create({
        name: 'Porperty',
        eStructuralFeatures
    })

    // EVENT

    // SCHEDULES

    // WRITES ATTRIBUTE

    // Simulator Class
    var simulator = Ecore.EClass.create({
        name : "Simulator"
    })
    // simulator.get('eStructuralFeatures').add(Ecore.EAttribute.create({name: 'id', eType: Ecore.EString}))
    // simulator.get('eStructuralFeatures').add(Ecore.EAttribute.create({name: 'name', eType: Ecore.EString}))
    // simulator.get('eStructuralFeatures').add(Ecore.EAttribute.create({name: 'description', eType: Ecore.EString}))


    simSpecackage.get('eClassifiers').add(Simulator);

    var resourceSet = Ecore.ResourceSet.create();
    // A Resource is used to load/save a model and also
    // handles de/serialization operations on a model

    var resource = resourceSet.create({ uri: '/simulator.json' });

    // Add the EPackage to the Resource
    resource.get('contents').add(simSpecPackage);

    // Serialize the model in JSON
    console.log(resoucre.to(Ecore.JSON));

};

window.onload = hello;