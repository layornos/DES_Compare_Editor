function simulator_specification() {

    //
    // The metamodel to specify simulators
    //

    // Each model must be contained in a EPackage
    // It must have a name, a nsPrefix and nsURI
    var simSpecPackage = Ecore.EPackage.create({ name: 'Simulator Specification', nsPrefix: 'simSpec' , nsURI: 'http://sdq.kit.edu/mosim/simspec'});

    // Classes

    // Root Element of the metamodel
    var simulatorSpecification = Ecore.EClass.create({ name: 'Simulator Specification' });

    // Simulator Class
    var simulator = Ecore.EClass.create({
        name : "Simulator"
    })
    simulator.get('eStructuralFeatures').add(Ecore.EAttribute.create({name: 'id', eType: Ecore.EString}))
    simulator.get('eStructuralFeatures').add(Ecore.EAttribute.create({name: 'name', eType: Ecore.EString}))
    simulator.get('eStructuralFeatures').add(Ecore.EAttribute.create({name: 'description', eType: Ecore.EString}))

    simSpecackage.get('eClassifiers').add(Simulator);

    var rs = Ecore.ResourceSet.create();
    // A Resource is used to load/save a model and also
    // handles de/serialization operations on a model

    var hello = rs.create({ uri: 'hello' });

    // Add the EPackage to the Resource
    hello.get('contents').add(simSpecPackage);

    // Serialize the model in JSON
    console.log(hello.to(Ecore.JSON));

};

window.onload = hello;