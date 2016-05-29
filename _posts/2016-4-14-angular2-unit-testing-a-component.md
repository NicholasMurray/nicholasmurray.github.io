---
layout: post
title: Angular2 - Unit Testing a component
---

![alt text ]({{ site.baseurl }}/images/High_voltage_test_set.jpg "Angular2 - unit Testing a component")

# Angular2  - Components

In Angular2 Components are the way we add behaviour to new DOM elements that we add to an application whereas 
Directives add behaviour to existing elements. Components allow us to break down an application into smaller 
pieces of code that can encapsulate behaviour and functionality. This allows us to test the component 
separately from the rest of the application. The component that we will unit test renders a supplied club 
members fullname in a span tag.

## Club Member Model

The club member component requires a club member to be supplied, so we will create a club member model 
that we can use to pass a club member as input to the component. The club member model needs two properties - 
a firstname and a surname - and we will also need to return function to return a fullname.

{% highlight html %}

export class ClubMemberModel {

    constructor(
        public firstname: string = '',
        public surname: string = ''
    ) {};

    fullname() {
        return (this.firstname + ' ' + this.surname);
    }
}

{% endhighlight %}


## Club Member Model Unit Test

The club member renderer component is going to have an Input property that is in the form of a club member 
model. So as the club member renderer component relies on the club member model we should unit test our 
club member model first to ensure that it works as expected. 


Firstly we need to import *describe*, *it* and *expect* from *angular2/testing* and 
*ClubMemberModel* from *club-member-model.ts*. Then we can test that the club member model returns firstname, 
surname and fullname in line with our expectations.

{% highlight html %}

import {
  describe, 
  it, 
  expect
} from 'angular2/testing';

import {ClubMemberModel} from './club-member-model';

describe('ClubMemberModel', () => {

  it('should return the correct properties', () => {

      var newClubMember = new ClubMemberModel();
      newClubMember.firstname = 'John';
      newClubMember.surname = 'Velo';

      expect(newClubMember.firstname).toBe('John');
      expect(newClubMember.surname).toBe('Velo');
      expect(newClubMember.fullname()).toBe('John Velo');
  });

});

{% endhighlight %}


## Club Member Renderer

The club member renderer component comprises of a *selector*, a *template* and has a databound *Input* property 
of clubmember. The selector parameter is the replacement for the naming conventions that were previously 
in directives and works in the same fashion as a querySelector that searches for an element called 
club-member-renderer upon which it will instatiate itself. The template parameter is an inline template 
that contains span tags that wrap an angular expression which evaluates clubmember.fullname(). Finally 
there is a a data bound input property of clubmember which will be passed to template for evaluation.

{% highlight html %}

import {Component, Input} from 'angular2/core';

@Component({
    selector: 'club-member-renderer',
    template:   `<span>{{ clubmember.fullname() }}</span>`
})
export class ClubMemberRenderer {
    @Input() clubmember;
}

{% endhighlight %}


## Club Member Renderer Unit Test

A component requires more setup than our previous model test. Intially we will have to import *describe*, 
*it*, *expect*, *inject*, *beforeEach*, *beforeEachProviders* and *TestComponentBuilder* from 
*angular2/testing*. Then next import *ClubMemberRenderer* from *club-member-renderer.ts* and 
*ClubMemberModel* from *club-member-model*.

Succeeding the imports is some setup for the test using the *beforeEachProviders*  and *inject* functions 
to bootstrap the test, instantiating the component under test. Then in the test we can create asynchronously 
the ClubMemberRenderer component verifying that the span element it creates, will render the fullname of a 
club member, if passed an instance of a ClubMemberModel containing a firstname and surname.

{% highlight html %}

import {
    describe, 
    it, 
    expect, 
    inject,
    beforeEach, 
    beforeEachProviders, 
    TestComponentBuilder
} from 'angular2/testing';

import {ClubMemberRenderer} from "./club-member-renderer";
import {ClubMemberModel} from "./club-member-model";
    
describe('ClubMemberRenderer: component', () => {
  let tcb;
  
  //setup
  beforeEachProviders(() => [
      TestComponentBuilder,
      ClubMemberRenderer
  ]);
  
  beforeEach(inject([TestComponentBuilder], _tcb => { 
      tcb = _tcb
  }));
  
  //specs
  it('should render club member name', done => {
      tcb.createAsync(ClubMemberRenderer).then(fixture => {
          let clubMemberFixture = fixture.componentInstance, 
          element = fixture.nativeElement;
          
          var newClubMember = new ClubMemberModel();
          newClubMember.firstname = 'John';
          newClubMember.surname = 'Velo';
              
          clubMemberFixture.clubmember = newClubMember;
          
          fixture.detectChanges(); //trigger change detection
          expect(element.querySelector('span').innerText).toBe('John Velo');
          done();
      })
      .catch(e => done.fail(e));
  });
});

{% endhighlight %}



## Club Member Renderer in action

So how is the club member renderer used in the context of an Angular2 app? First we create an app component 
that imports *Component* and *Input* from *angular2/core*, *ClubMemberModel* from *club-member-model* and 
then *ClubMemberRenderer* from *club-member-renderer*. Next we declare the selector parameter of *app*,
a template parameter which contains a *<club-member-renderer>* element and then a directive reference to 
the *ClubMemberRenderer* component. The App class contains a variable *clubMember* declared as type 
*ClubMemberModel* then in the constructor *clubMember* is set to a new instance of *ClubMemberModel* 
comprising of a firstname and surname.
 

{% highlight html %}

import {Component, Input} from 'angular2/core';
import {ClubMemberModel} from './club-member-model';
import {ClubMemberRenderer} from './club-member-renderer';

@Component({
	selector: 'app',
	template: `<div>
	            <club-member-renderer [clubmember]="clubMember"></club-member-renderer>
	           </div>`,
	directives: [ClubMemberRenderer]
})
export class App {
  clubMember: ClubMemberModel;
  
  constructor() {
    
    this.clubMember = new ClubMemberModel("John", "Velo");
  }
}

{% endhighlight %}


## Plunker Links

The code for the *ClubMemberRenderer* unit tests are available in this <a href="https://plnkr.co/XcBugFIxCpS7ARyEHBXK" target="_blank">plnkr</a> 
and the *ClubMemberRenderer* in action code is available in this <a href="https://plnkr.co/QYMkClDh6t7nYPfbcaZO" target="_blank">plnkr</a>. 



