import { TestBed } from '@angular/core/testing';

import { TopicService } from './topic.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('TopicService', () => {
  let service: TopicService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TopicService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retrieveTopics() should be called', (done: DoneFn) => {
    service.retrieveTopics().subscribe((data) => {
      // now have to subscribe getUsers method to get data
      expect(data).toHaveSize(20);
      done();
    });
  });

  it('should retrieve data from the API via GET', () => {
    const mockData = {
      by: 'fxtentacle',
      id: 39508256,
      kids: [39508339],
      parent: 39507831,
      text: 'Abandon them and move on.<p>I tried both. Selling small apps is an uphill battle against Apple updates forcing you to buy and recompile. And even if people only paid $1, they will expect professional support. Nowadays, niche apps on iOS don&#x27;t work financially.<p>And my experience with releasing useful tools as open source was that companies started linking to them in tutorials, and then their customers sent me unfriendly email and demanded that I provide support for the tool and solve their problems (for free). Most useful open source tools have companies paying the core crew.<p>For your CV, a video of the app working is probably just as valuable as actually releasing it. And then you can always link to a private copy of the source code in your CV.',
      time: 1708929967,
      type: 'comment',
    };
    const id = 39508256; // replace with your test ID
    service.getTopic(id).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpController.expectOne(`${service.baseUrl}/item/${id}.json`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });

  it('should return the comments', () => {
    const id = 39498541;
    const mockComments = [
      {
        by: 'Corun',
        id: 39508493,
        parent: 39498541,
        text: 'Those look like pretty normal numbers in my experience. Certainly nothing to worry about. But, the effectiveness of your marketing isn’t necessarily a good measure of your idea and product. Different targeting can change those numbers drastically.<p>Also, how good web or search ads are really depends on the economics of your product. If your customers will be paying $60 per year then paying 5$ to acquire them is pretty damn good.<p>For the moment though, I would focus on getting into real conversations(phone or video) with your customers to understand what they want, how much they’d pay, etc. With so much competition for attention, the days of validating with a landing page may be over.',
        time: 1708932617,
        type: 'comment',
      },
      {
        by: 'latentdeepspace',
        id: 39508771,
        parent: 39498541,
        text: 'Where do you run the ads? And how did you set it up - how specific your targeting is?',
        time: 1708935828,
        type: 'comment',
      },
      {
        by: '35mm',
        id: 39508510,
        parent: 39498541,
        text: '- Who is the target market?<p>- What’s the pricing of the courses?<p>- What’s the promised outcome for completing the courses? E.g make more sales in their business? Get a better job? Get healthier?<p>- What kind of ads? Google search? Facebook?<p>- What counts as a conversion? Subscription? One off purchase?<p>- Have you asked the buyers what they want &#x2F; why they bought?',
        time: 1708932805,
        type: 'comment',
      },
      {
        by: 'spondylosaurus',
        id: 39508449,
        parent: 39498541,
        text: 'Where are you running ads? A good chunk of those impressions and clicks might be invalid traffic (although the signups are almost certainly legit).',
        time: 1708932131,
        type: 'comment',
      },
      {
        deleted: true,
        id: 39498542,
        parent: 39498541,
        time: 1708847216,
        type: 'comment',
      },
    ];

    service.getComments(id).subscribe((comments) => {
      expect(comments).toEqual(mockComments);
    });

    const req = httpController.expectOne(`${service.baseUrl}/item/${id}.json`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockComments);
  });

  afterEach(() => {
    httpController.verify();
  });
});
