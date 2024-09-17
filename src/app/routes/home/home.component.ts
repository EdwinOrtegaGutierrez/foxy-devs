import { Component } from '@angular/core';
import { CardInfoComponent } from "../../shared/ui/card-info/card-info.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  elementsList: any[] = [
    {
      title:'Database',
      img:[
        'MySQL',
        'Microsoft SQL Server'
      ]        
    },  
    {
      title:'Backend Development',
      img:[
        'csharp',
        'Python'
      ],
    },  
    {
      title:'Frontend Development',
      img:[
        'Angular',
        'Next.js'
      ]
    },  
    {
      title:'Frameworks',
      img:[
        'NET_Core_Logo',
        'Flask',
      ]
    },  
    {
      title:'DevOps',
      img:[
        'Docker'
      ]
    },  
    {
      title:'Server',
      img:[
        'Windows 11',
        'Linux',
      ]
    }
  ];

  infoList: any[] = [
    {
      title:'Scalability',
      description:'Allows the system to grow and adapt to new needs without affecting overall stability.'
    },
    {
      title:'Maintainability',
      description:'Facilitates bug fixes, updates, and maintenance by having an organized and modular structure.'
    },
    {
      title:'Reusability',
      description:'Encourages the reuse of components and modules, which can reduce development time and costs.'
    },
    {
      title:'Modularity',
      description:'Breaks the system into smaller, manageable parts, making it easier to develop and understand the system.'
    },
    {
      title:'Decoupling',
      description:'Allows system components to interact independently, improving flexibility and the ability to make changes without affecting other parts of the system.'
    },
    {
      title:'Performance',
      description:'Optimizes system performance by designing components to meet specific requirements and handle workloads efficiently.'
    },
    {
      title:'Security',
      description:'Helps implement and manage appropriate security measures by clearly defining component interfaces and boundaries.'
    },
    {
      title:'Communication',
      description:'Enhances communication between development teams by providing a clear and unified view of how the system integrates.'
    },
    {
      title:'Documentation',
      description:'Facilitates system documentation by providing a clear and coherent structure that developers can follow.'
    },
    {
      title:'Risk Management',
      description:'Identifies and mitigates potential risks through planned design and a global view of the system.'
    },
    {
      title:'Flexibility',
      description:'Allows the system to adapt to changes in requirements or technology without needing to rewrite large parts of the code.'
    },
    {
      title:'Ease of Testing',
      description:'Simplifies system testing and validation by allowing more effective and specific unit and integration tests for each module.'
    },
    {
      title:'Parallel Development',
      description:'Allows different teams to work on different components or modules simultaneously, speeding up the development process.'
    },
    {
      title:'Development Costs',
      description:'Reduces long-term costs by minimizing the need for refactoring and bug fixing with a solid architecture from the start.'
    }
  ];

  softwareArch:any[] = [
    {
      description:'Microservices'
    },
    {
      description:'Layers'
    },
    {
      description:'Containers'
    },
    {
      description:'Service-Oriented Architecture'
    },
    {
      description:'User Interfaces (UI)'
    },
    {
      description:'Cloud Data'
    },
    {
      description:'Real-Time Applications'
    }
  ]

  chooseUs:any[] = [
    {
      description:'Solutions to Business Problems'
    },
    {
      description:'Specialized Software'
    },
    {
      description:'5 Years of Experience'
    },
    {
      description:'Comprehensive Service'
    },
    {
      description:'Innovative Technology'
    },
    {
      description:'Customer Support'
    },
    {
      description:'Proven Results'
    }
  ]
}
